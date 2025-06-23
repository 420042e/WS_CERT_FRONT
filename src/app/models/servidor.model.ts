export interface Servidor {
  id: number;
  nombre: string | null; // o string | undefined
  estado: string | null;
  iPv4: string | null;
  sistemaOperativo: string | null; // JSON convierte "SISTEMA OPERATIVO" a camelCase
  idTipoServidor: number;
  sujeto: string;
  emisor: string;
  validoDesde: string; // JSON convierte DateTime a string (ISO 8601)
  validoHasta: string;
  fechaRegistro: string;
  observacion: string | null;
}