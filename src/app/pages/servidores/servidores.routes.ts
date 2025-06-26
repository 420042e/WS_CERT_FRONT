import { Routes } from '@angular/router';
import { ServidorDev } from './servidordev';
import { ServidorCer } from './servidorcer';
import { ServidorBtb } from './servidorbtb';
import { ServidorDmz } from './servidordmz';
import { ServidorBcr } from './servidorbcr';
import { ServidorBhi } from './servidorbhi';

export default [
    { path: 'dev', data: { breadcrumb: 'Desarrollo' }, component: ServidorDev },
    { path: 'cer', data: { breadcrumb: 'Certificacion' }, component: ServidorCer },
    { path: 'btb', data: { breadcrumb: 'Produccion' }, component: ServidorBtb },
    { path: 'dmz', data: { breadcrumb: 'Produccion DMZ' }, component: ServidorDmz },
    { path: 'bcr', data: { breadcrumb: 'Produccion BCR' }, component: ServidorBcr },
    { path: 'bhi', data: { breadcrumb: 'Produccion BHI' }, component: ServidorBhi },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
