import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from "src/app/user";



import pdfMake from 'pdfmake/build/pdfmake.min.js';
import * as pdfFonts  from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Student','Essential Service Provider','Tourist','Pilgrim','Emergency / Medical','Marriage'];
  options = [{ value: "This is value 1", checked: true }];
  statuses = ["control"];

  // name = "Angular";//
  fileToUpload: any;
  imageUrl: any;
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = (<FileReader>event.target).result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
  
  
  
  constructor() { }

  ngOnInit(): void {
  }

  Email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.Email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.Email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(){
    console.log(this.UserModel);
        
  }

  UserModel = new User("","",0,"","","","",0);

/**getProfilePicObject() {
  if (this.UserModel.profilePic) {
    return {
      image: this.UserModel.profilePic ,
      width: 30,
      height:30,
      alignment : 'center'
    };
  }
  return null;
}

getBase64(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    console.log(reader.result);
    this.UserModel.profilePic = reader.result as string;
  };
  reader.onerror = (error) => {
    console.log('Error: ', error);
  };
}**/

  
  generatePDF() {
    let docDefinition = {
      content: [
        {
          text: 'TRAVEL',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'E-Pass',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          text: 'Traveller Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: this.UserModel.name,
                bold:true
              },
              { text:"Gender   "+ this.UserModel.gender },
              { text: "Email:   "+this.UserModel.email },
              { text:"Mobile Number:   "+ this.UserModel.number },
              { text:"Category Of Travel:   "+ this.UserModel.category },
              
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              { 
                text: `Epass- No : ${((Math.random() *1000).toFixed(0))}`,
                alignment: 'right'
              }
            ],
         
          ]
        },
        {
          text: 'Present Address',
          style: 'sectionHeader'
        },
        {
            text: this.UserModel.present_address,
            margin: [0, 0 ,0, 15]          
        },
        {
          text: 'Destination Address',
          style: 'sectionHeader'
        },
        {
            text: this.UserModel.destination_address,
            margin: [0, 0 ,0, 15]          
        },
        {
          text: 'Aadhar Number',
          style: 'sectionHeader'
        },
        {
            text: this.UserModel.aadhar,
            margin: [0, 0 ,0, 15]          
        },
        {
          columns: [
            [{ qr: `${this.UserModel.name}`, fit: '50' }],
            [{ text: 'Signature', alignment: 'right', italics: true}],
          ]
        },
        {
          text: "Precautions",
          decoration: 'underline',
          bold:true,
          fontSize:15
        },
        {
          ul: [
            
            'Wash your hands often.',
            'Avoid close contact.',
            'Cover your mouth and nose with a mask when around others.',
            'Monitor Your Health Daily.'
          ],
      },
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15,0, 15]          
        }
      }
      
    };
    pdfMake.createPdf(docDefinition).open();

  }
}
