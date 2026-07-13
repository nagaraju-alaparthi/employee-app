import { Injectable } from '@angular/core';
import { graphqlClient } from './graphql.client';
import { gql } from '@apollo/client';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

    getCountries() {

    return graphqlClient.query({

      query: gql`
        query {
          countries {
            code
            name
            capital
          }
        }
      `

    });

  }
}
