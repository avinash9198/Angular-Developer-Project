import { colors } from "@angular-devkit/build-angular/src/utils/color";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 1000,
    description: 'A large phone with one of the best screens',
    colors:"red"
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    colors:"blue"
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'this phone is very good',
    colors:"black"
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/