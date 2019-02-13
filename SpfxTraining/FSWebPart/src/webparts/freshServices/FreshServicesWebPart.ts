import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'FreshServicesWebPartStrings';
import FreshServices from './components/FreshServices';
import { IFreshServicesProps } from './components/IFreshServicesProps';
import { HttpClient, HttpClientResponse } from '@microsoft/sp-http';

export interface IFreshServicesWebPartProps {
  description: string;
}

export default class FreshServicesWebPart extends BaseClientSideWebPart<IFreshServicesWebPartProps> {

  private callFreshServices(): void {
    this.context.httpClient
    .get('https://hqservices.freshservice.com/helpdesk/tickets.json', HttpClient.configurations.v1,
    {
      headers:[
        ['accept', 'application/json'],
        ['Authorization','Basic apikey:CJ0D7OMmzYbntb0ri']
      ]
    })
    .then((res: HttpClientResponse): Promise <any> =>{
      return res.json();
    })
    .then((response: any): void =>{
      console.log(response); //move from log to web part view
    });
  }


  public render(): void {
    this.callFreshServices();
    const element: React.ReactElement<IFreshServicesProps > = React.createElement(
      FreshServices,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
