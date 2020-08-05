/* Amplify Params - DO NOT EDIT
	API_MEDICARE_DOCTORTABLE_ARN
	API_MEDICARE_DOCTORTABLE_NAME
	API_MEDICARE_DOCTORWORKSLOTTABLE_ARN
	API_MEDICARE_DOCTORWORKSLOTTABLE_NAME
	API_MEDICARE_GRAPHQLAPIIDOUTPUT
	API_MEDICARE_PATIENTTABLE_ARN
	API_MEDICARE_PATIENTTABLE_NAME
	API_MEDICARE_SESSIONTABLE_ARN
	API_MEDICARE_SESSIONTABLE_NAME
	API_MEDICARE_USERTABLE_ARN
	API_MEDICARE_USERTABLE_NAME
Amplify Params - DO NOT EDIT */

const DOCTOR_WORK_SLOT_TABLE_NAME = process.env.API_MEDICARE_DOCTORWORKSLOTTABLE_NAME;
const DOCTOR_TABLE_NAME = process.env.API_MEDICARE_DOCTORTABLE_NAME;

const AWS = require('aws-sdk');
const { v4: uuid } = require('uuid');

const DDB = new AWS.DynamoDB({apiVersion: '2012-08-10'});

async function createItem(table, input) {
    input.id = uuid();
    return new Promise((resolve, reject) => {
        DDB.putItem(
            {
                TableName: table,
                Item: AWS.DynamoDB.Converter.marshall(input)
            }
            , function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(AWS.DynamoDB.Converter.unmarshall(data.Attributes));
                }
            });
    });
}

async function getItem(table, key) {
    return new Promise((resolve, reject) => {
        DDB.getItem(
            {
                TableName: table,
                Key: AWS.DynamoDB.Converter.marshall(key)
            }
            , function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(AWS.DynamoDB.Converter.unmarshall(data.Item));
                }
            }
        )
    });
}

const authorizers = {
    Mutation: {
        createDoctorWorkSlot: async event => {
            const {username,  groups} = event.identity;
            const input = event.arguments.input;

            if (groups.includes('Admins')) {
                return;
            } else if (groups.includes('Doctors')) {
                if (username === input.doctor_id) {
                    return;
                }
            }
            throw new Error('Not authorized');
        }
    }
}

const resolvers = {
    Mutation: {
        createDoctorWorkSlot: async event => {
            const input = event.arguments.input;
            //    TODO: Create sanity checks for the input
            const item = await createItem(DOCTOR_WORK_SLOT_TABLE_NAME, input);
            item.doctor = await getItem(DOCTOR_TABLE_NAME, { id: item.doctor_id });
            return item;
        }
    }
}

exports.handler = async (event) => {

    const resolverTypeHandler = resolvers[event.typeName];
    if (resolverTypeHandler) {
        const resolver = resolverTypeHandler[event.fieldName];
        if (resolver) {
            const authorizerTypeHandler = authorizers[event.typeName];
            if (authorizerTypeHandler) {
                const authorizer = authorizerTypeHandler[event.fieldName];
                await authorizer(event);
            }
            return await resolver(event);
        }
    }
    throw new Error('Could not find resolver');
};
