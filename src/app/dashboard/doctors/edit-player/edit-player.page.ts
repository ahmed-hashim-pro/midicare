import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController, Platform } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import {AuthService} from '@core/service/auth/auth.service';
import { MaxLengthValidator } from '@angular/forms';


@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.page.html',
  styleUrls: ['./edit-player.page.scss'],
})
export class EditPlayerPage implements OnInit {
  public signup : {
    username : string,
    password : string,
    email : string,
    title : string,
    specialisty : string,
    mobileNumber : string,
    facebookPage : string,
    medicalLicsenceNo : string,
    clinicalAddress : string,
    clinicalPhone : string,

  };
  public attributes : {
    email : string,
    phone_number : string,
    gender : string,
    name : string,
    nickname : string
    

  };
  public submitted: boolean;
  url:any ='assets/images/avatar.jpg';
  url2:any ='assets/images/empty.jpg';


  imageURL: any;
  @ViewChild('fileButton', { static: false }) fileButton;
  imageResponse: any;
  options: any;
  player:any
  public isPhone:boolean ;
  constructor(private authService: AuthService,navParams: NavParams,public viewCtrl: ModalController,private imagePicker: ImagePicker,public platform: Platform) {
   this.player=navParams.get('player')
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      // 'hybrid' detects both Cordova and Capacitor
      if (this.platform.is('hybrid')) {
        // make your native API calls
        console.log('hybrid');
        this.isPhone==true;
      } else {
        // fallback to browser APIs
                console.log('web');
                this.isPhone==false;

      }
    });

    this.submitted = false;
    this.signup = {
      username: '',
      password: '',
      email : '',
    title : '',
    specialisty : '',
    mobileNumber : '',
    facebookPage : '',
    medicalLicsenceNo : '',
    clinicalAddress : '',
    clinicalPhone : '',
    };
  }

  update()
  {
    this.viewCtrl.dismiss(this.player);

  }
  images:any[]=[]
  openImagePicker()
  {
    let options={
      maximumImagesCount:10
    }

    this.imagePicker.getPictures(options).then((results) => {
      //alert(JSON.stringify(results[0]))
      for (var i = 0; i < results.length; i++) {
        results[i]=(<any>window).Ionic.WebView.convertFileSrc(results[i])
      }
      this.images=results
    }, (err) => { });
  }
  uploadFile() {
    this.fileButton.nativeElement.click();
  }
  fileChanged(event) {
    const files = event.target.files;
    console.log(files);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  getImages() {
    this.options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      //maximumImagesCount: 3,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 200,
      //height: 200,

      // quality of resized image, defaults to 100
      quality: 25,

      // output type, defaults to FILE_URIs.
      // available options are 
      // window.imagePicker.OutputType.FILE_URI (0) or 
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1
    };
    this.imageResponse = [];
    this.imagePicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (err) => {
      alert(err);
    });
  }


  //for browser
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  onSelectliscence(event2) {
    if (event2.target.files && event2.target.files[0]) {
      var reader2 = new FileReader();

      reader2.readAsDataURL(event2.target.files[0]); // read file as data url

      reader2.onload = (event2) => { // called once readAsDataURL is completed
        this.url2 = event2.target.result;
      }
    }
  }
  async signUp() {
    this.submitted = true;
    this.attributes = {
      email : 'doctor14@mail.com',
      phone_number : '+201026894445',
      gender : 'male',
      name : 'Ahmed hashim',
      nickname : 'Patients'
      
  
    };
    const user = await this.authService.signUp('doctor14@mail.com', '123456789',this.attributes );
    console.log(user);
    //await this.router.navigateByUrl('/signup')
  }
  

}
