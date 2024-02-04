import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"online-auto-kuca","appId":"1:372048392789:web:66229c93cd9185c8b35adc","storageBucket":"online-auto-kuca.appspot.com","apiKey":"AIzaSyADDyR6hhiSmD3mtaQiGfJW5lmfCMX-dpQ","authDomain":"online-auto-kuca.firebaseapp.com","messagingSenderId":"372048392789","measurementId":"G-VFVN7ZCRVE"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, UserTrackingService, importProvidersFrom(provideFirestore(() => getFirestore()))]
};
