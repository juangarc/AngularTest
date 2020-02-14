import { Component, OnInit } from "@angular/core";
import { PerfilService } from "src/app/services/perfil.service";
import { ActivatedRoute } from "@angular/router";
import { faPen } from "@fortawesome/free-solid-svg-icons"  


@Component({
  selector: "app-perfil",
  templateUrl: "./perfil.component.html",
  styleUrls: ["./perfil.component.sass"]
})
export class PerfilComponent implements OnInit {
  id: number = null;
  profile;
  faPen = faPen;
  constructor(private api: PerfilService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params["id"];
    console.log(this.id);
    this.getOneRecord(this.id);
  }

  getOneRecord = id => {
    this.api.getOneRecord(id).subscribe(data => {
      console.log(data);
      this.profile = data.result;
    });
  };

  ngOnInit() {}
}
