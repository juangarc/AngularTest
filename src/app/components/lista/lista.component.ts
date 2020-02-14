import { Component, OnInit } from "@angular/core";
import { PerfilService } from "src/app/services/perfil.service";
import { MatTableDataSource } from "@angular/material";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"  

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.sass"]
})
export class ListaComponent implements OnInit {
  profiles;
  headers = {};
  header = {};
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;
  constructor(private api: PerfilService) {
    this.getAllData();
    

    this.headers = [
      "",
      "NOMBRE",
      "APELLIDO",
      "WEBSITE",
      "DOB",
      "EMAIL",
      "ADDRESS",
      "PHONE"
    ];

    this.header = [
      "_links.avatar.href",
      "first_name",
      "last_name",
      "website",
      "dob",
      "email",
      "address",
      "phone"
    ];
  }

  ngOnInit() {}

  getAllData = () => {
    this.api.getAllData().subscribe(
      data => {
        this.profiles = data.result;
        let dataSource = new MatTableDataSource(data.result);
        console.log(dataSource);
        console.log(this.profiles);
        
      },
      error => {
        console.log(error);
      }
    );
  };
}
