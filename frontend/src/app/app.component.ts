import { Component } from '@angular/core';
import { RandomUsersService } from './services/random-users.service';
import { FormBuilder } from '@angular/forms';
import { UserObject } from './interfaces/UserObject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Zappar Random User Generator';
  company = 'Zappar';
  nationalities = ['AU','BR','CA','CH','DE','DK','ES','FI','FR','GB','IE','IR','NO','NL','NZ','TR','US'];
  genders = ['Male', 'Female'];
  generatorForm: any;
  user:UserObject;
  showCard:boolean;
  error:boolean;
  errorMessage:string;

  constructor(private webservice : RandomUsersService, private formBuilder: FormBuilder){ }

  ngOnInit(){
    this.showCard = false;
    this.error = false;
    this.generatorForm = this.formBuilder.group({
      gender: this.genders[0].toLocaleLowerCase(),
      nat:this.nationalities[0]
    });
  }

  async onSubmit(customerData) {
    // Decrypt the message data.
    let responseData:any;

    // Get a random user
    await this.webservice.generateUser(customerData)
      .then((response:any)=>{
        let responseData:any = response.results[0];

        // update the user card
        this.user = {
          gender:responseData.gender,
          nat:responseData.nat,
          title:responseData.name.title,
          fname:responseData.name.first,
          lname:responseData.name.last,
          phone:responseData.phone,
          email:responseData.email
        }
      })
      .catch((error)=>{
        // Show error alert box with message
        this.error = true;
        this.errorMessage = 'Opss there was an error generating a user!';
      });

    // Stop execution if there was an error
    if(this.error) return;

    // Save user
    await this.webservice.saveUser(this.user)
      .then((response)=>{
          // Show the card once the user is saved
          this.showCard = true;
      })
      .catch((error)=>{
        // Show error alert box with message
        this.error = true;
        this.errorMessage = 'Opss there was an error saving the user!';
      });

  }

}
