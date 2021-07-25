import { UsuarioModule } from "../modulos/usuario/usuario.module";

export class UsuarioModelo{ 
    id?: number;
    nombre_usuario?: string;
    clave?: string;
    telefono?: string;
    tipoUsuarioId?: string;
    user?: UsuarioModule;
    tk?: string;
    isLoggedIn: boolean =false; 
}