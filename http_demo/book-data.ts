import { InMemoryDbService } from 'angular-in-memory-web-api';
//Dummy Database
export class BookData implements InMemoryDbService {
  createDb() {
    let books = [
      { id: '1', name: 'Angular made easy', category: 'Angular', writer: 'Krishna' },
      { id: '2', name: 'Professional Java', category: 'Angular', writer: 'Krishna' },
      { id: '3', name: 'AngularJS Programming', category: 'Angular', writer: 'Vishnu' },	
      { id: '4', name: 'J2EE -Servlets', category: 'Java', writer: 'Vishnu' },
      { id: '5', name: 'MS Azure Devlopment', category: 'Azure', writer: 'Vishnu' },
      { id: '6', name: 'Azure Admin', category: 'Azure', writer: 'Vishnu' },
      { id: '7', name: 'ASP.NET MVC', category: 'DotNET', writer: 'Krishna' },
       { id: '8', name: 'ABC', category: 'DotNET', writer: 'Krishna' }
    ];

    let workshops = [
      { id: 'Java', name:'CoreJava', technology:'Java',Vendor:'Oracle Corporation'  },
      { id: 'PHP', name: 'PHP', category: 'Web', Vendor: 'ZEND' },
      { id: 'AWS1', name: 'Amazon Web Service', category: 'Cloud', Vendor: 'Amazon' },	
      { id: 'AWS2', name: 'Data Analytics', category: 'Cloud', Vendor: 'Amazon' },	
      { id: 'MSA1', name: 'MS Azure Developer', category: 'Cloud', Vendor: 'Microsoft' },
      { id: 'MSA2', name: 'MS Azure Admin', category: 'Cloud', Vendor: 'Microsoft' },	
      { id: 'MCL1', name: 'Machine Learning', category: 'Cloud', Vendor: 'Amazon' },
      { id: 'SLF', name: 'Sales Force', category: 'Cloud', Vendor: 'IBM' },		
    ];

    return {books,workshops};
  }
} 