import {Dish} from './dish';

export const Dishes : Dish[]=[
        {
          id: '0',
          name: 'UthaPizza',
          image: '/assets/images/pool.png',
          category: 'mains',
          featured: true,
          label: 'Hot',
          price: '4.99',
          description: 'First',
          comment:[
              {
                  rating:2,
                  comment:'dhskdjhfkds',
                  auther:'Leila',
                  date:''
              },
              {
                rating:5,
                comment:'',
                auther:'',
                date:''
            }
          ]
        },
        {
          id: '1',
          name: 'SecondPizza',
          image: '/assets/images/boat.png',
          category: 'mains',
          featured: false,
          label: 'Cool',
          price: '9',
          description: 'Second',
          comment:[
            {
                rating:2,
                comment:'dhskdjhfkds',
                auther:'Leila',
                date:''
            },
            {
              rating:5,
              comment:'',
              auther:'',
              date:''
          }
        ]
        },
        {
          id: '0',
          name: 'UthaPizza',
          image: '/assets/images/pool.png',
          category: 'apetizer',
          featured: true,
          label: 'Hot',
          price: '7',
          description: 'third',
          comment:[
            {
                rating:2,
                comment:'dhskdjhfkds',
                auther:'Leila',
                date:''
            },
            {
              rating:5,
              comment:'Perfect',
              auther:'Jim',
              date:'154/2020/5'
          }
        ]
        },
        {
          id: '3',
          name: 'forthPizza',
          image: '/assets/images/fruits.png',
          category: 'mains',
          featured: true,
          label: '',
          price: '4.99',
          description: 'forth',
          comment:[
            {
                rating:2,
                comment:'dhskdjhfkds',
                auther:'Leila',
                date:''
            },
            {
              rating:5,
              comment:'Great Food !',
              auther:'Ali',
              date:'4/3/2020'
          }
        ]
        }
    ];
