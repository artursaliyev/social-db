import BaseHttpService from "./base-http-service";

export default class ContactService extends BaseHttpService {
  contacts = [
    {
      id: 1,
      name: "John Smith",
      adress: "USA, Californiya, state #1",
      phone: "+99897-77-88-99",
      net: "sultansha_007",
      url_photo: "https://placeimg.com/400/500/people"
    },
    {
      id: 2,
      name: "John Smith",
      adress: "USA, Californiya, state #1",
      phone: "+99897-77-88-99",
      net: "sultansha_007",
      url_photo: "https://placeimg.com/400/500/people"
    },
    {
      id: 3,
      name: "John Smith",
      adress: "USA, Californiya, state #1",
      phone: "+99897-77-88-99",
      net: "sultansha_007",
      url_photo: "https://placeimg.com/400/500/people"
    },
    {
      id: 4,
      name: "John Smith",
      adress: "USA, Californiya, state #1",
      phone: "+99897-77-88-99",
      net: "sultansha_007",
      url_photo: "https://placeimg.com/400/500/people"
    },
    {
      id: 5,
      name: "John Smith",
      adress: "USA, Californiya, state #1",
      phone: "+99897-77-88-99",
      net: "sultansha_007",
      url_photo: "https://placeimg.com/400/500/people"
    }
  ];
  all = async () => {
    await this.delay(2000);
    return this.contacts;
  };

  getById = async id => {
    await this.delay(2000);
    return this.contacts.filter(item => item.id === id);
  };
}
