import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as crypto from 'crypto-js';
import { UsuarioModelo } from 'src/app/modelos/usuario.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { UsuarioModule } from '../../usuario/usuario.module';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  fgValidacion: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, 
    private servicioSeguridad: SeguridadService,
    private router: Router) {
    
 }

  ConstruirFormulario(){
    this.fgValidacion = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.ConstruirFormulario
  }

  get obtenerFGV(){
    return this.fgValidacion.controls;
  }

  ValidarIdentificacion(){
    if(this.fgValidacion.invalid){
      alert("formulario invalido")
    }else{
      let correo = this.obtenerFGV.correo.value;
      let clave = this.obtenerFGV.clave.value;
      let claveCifrada = crypto.MD5(clave).toString();

      let modelo = new UsuarioModelo();
      modelo.nombre_usuario = correo;
      modelo.clave = claveCifrada;
      this.servicioSeguridad.verificarUsuario(modelo).subscribe(
        (datos: UsuarioModelo) => {
          alert("datos correctos");
          this.servicioSeguridad.AlmacenarDatosSesionEnLocal(datos);
          this.router.navigate(["/inicio"]);
        },
        (error) => {
          alert("datos incorrectos")
        }
      );
    }
  }
}
