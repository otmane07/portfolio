import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';
import { NotificationsService } from 'angular2-notifications';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
  export class ContactComponent implements OnInit {

    model: any = {};
    personnes: Array<any> = [];
    personne: any = { };
    nom="";
    email="";
    message=""
  
 
  
    constructor(
      private http: HttpClient,private toastr: ToastrService
    ){}
  
    ngOnInit() {
     
      }
      onSucces(){
        
        this.toastr.success('Message envoyer avec succes')
           }   
       onSubmit( f ) {
         
          const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
          this.http.post('https://formspree.io/f/mwkazldk',
            { nom: f.value.nom, lastname: f.value.lastname , message:f.value.message},
            { 'headers': headers }).subscribe(
              response => {
               
              }
            );
        }  
     
}
