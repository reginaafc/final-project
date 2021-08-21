const db = require('./connection');
const { User, Post, Donation } = require('../models');
const { isValidObjectId } = require('mongoose');
const mongojs = require('mongojs');


db.once('open', async () => {

    await Donation.deleteMany();
    await User.deleteMany();

    const eduardo = await User.create({
        name: 'Eduardo',
        last_name: 'Martínez',
        username: 'emartinez',
        email: 'emartinez@mail.com',
        password: 'password12345'
    });

    const erick = await User.create({
        name: 'Erick',
        last_name: 'Contreras',
        username: 'econtreras',
        email: 'econtreras@mail.com',
        password: 'password12345'
    });

    console.log('users seeded');

    const donations = await Donation.insertMany([
        {
            user: eduardo._id,
            donation: 500,
            date: '08 / 14 / 21',
            id_post: '1'
        },
        {
            user: erick._id,
            donation: 900,
            date: '08 / 14 / 21',
            id_post: '2'
        },
        // {
        //     user: 'sperez',
        //     donation: 1000,
        //     date: '08 / 16 / 21',
        //     id_post: '3'
        // },
        // {
        //     user: 'rfranco',
        //     donation: 300,
        //     date: '08 / 15 / 21',
        //     id_post: '4'
        // },
        // {
        //     user: 'avaldez',
        //     donation: 2000,
        //     date: '08 / 17 / 21',
        //     id_post: '5'
        // },
    ]);

    console.log('donations seeded');

    await Post.deleteMany();

    await Post.create({
        project_name: 'My first Macbook',
        description: "Donate to support the purchase of my own personal computer for 2022.",
        publication_date: '01/31/2021',
        location: 'Comalcalco, Tabasco, México',
        image: 'My_macbook_pro.jpg',
        fundraise_destination: 'Your donation will make possible to start my life as a professional programmer.',
        fundraise_account: 1723482348,
        results: 'As soon as I have full donation I will let you know',
        expiration_date: '12/31/2021',
    });

    await Post.create({
        project_name: 'Mexican Sea Turtle Foundation',
        description: "Donate to protect marine turtles from illegal slaughter and to protect nests from illegal poaching. With the main purpouse of preventing extintion.",
        publication_date: '05/14/2021',
        location: 'Costa Azul, Pijijiapan, Chiapas, México',
        image: 'Costa_Azul_Pijijiapan.jpg',
        fundraise_destination: 'Your donation will be directed to recolect eggs from nests and assure them in a more protected environment.',
        fundraise_account: 3074656824,
        results: '3 species of sea tutles are protected, 1000 hatchling hatched in our care, 2 missions completed',
        expiration_date: '01/01/2022'
    });

    await Post.create({
        project_name: 'Summer Scholarship in foreign country',
        description: "It will provide a grant to selected individuals to work, live, and learn for a 12-week summer period in a foreign country.",
        publication_date: '08/14/2021',
        location: 'Headquarters: Guadalajara, Jalisco, México.',
        image: 'Summer_scholarship.jpg"',
        fundraise_destination: 'Your donation will be donated for travel and lounge expenses.',
        fundraise_account: 3932449492,
        results: '3 consecutive years offering scholarships',
        expiration_date: '01/01/2022'
    });

    await Post.create({
        project_name: 'Park transformation',
        description: "Donations will warrant a reconstruction of destroyed parks to increase secure and healthy places for familiar leisure.",
        publication_date: "06/06/2021",
        location: 'Iztapalapa, Ciudad de México',
        image: 'Park_transformation.jpg',
        fundraise_destination: 'Your donation will be donated for reforestation, plantation, path network, play area and more.',
        fundraise_account: 8723432312,
        results: '1 transformed park.',
        expiration_date: '12/31/2023',
    });

    await Post.create({
        project_name: 'Backpacking across Asia',
        description: "I'm a dreamer who whises to travel around Asian continent through a period of 2 years. Posting daily videos of my experiences.",
        publication_date: "06/06/2021",
        location: 'Cobán, Guatemala.',
        image: 'Assian_backpacking.jpg',
        fundraise_destination: 'Every cent will be used to organize and pay transportation and luggage to diferent destinations.',
        fundraise_account: 8472339423,
        results: 'Previous donation help me travel from Cobán to Beijing',
        expiration_date: '12/31/2023',
    });

    await Post.create({
        project_name: 'Set my pool',
        description: "I am an adoptive mother of 15 children under the age of 18. Since the pandemic, we have not had the opportunity to have outdoor activities. We have a large garden, where we plan to build a pool for the healthy recreation of our children.",
        publication_date: "01/01/2021",
        location: 'Tijuana, Baja California.',
        image: 'My_pool.jpg',
        fundraise_destination: 'Every donation will help in the pool construction.',
        fundraise_account: 1203483457,
        results: 'No previous funding. We will mantain you actualized',
        expiration_date: '12/31/2021',
    });

    await Post.create({
        project_name: 'Breakfast Club Funding',
        description: "It will support breakfast and lunches to children of families who need it most.",
        publication_date: "09/01/2021",
        location: 'All over Mexico.',
        image: 'Great_breakfast.jpg',
        fundraise_destination: 'Supporf directly a breakfast for 1 child.',
        fundraise_account: 8923021932,
        results: '+1500 daily breakfast last year and +3000 children awaiting',
        expiration_date: '12/21/2025',
    });

    await Post.create({
        project_name: 'Travel to Mahahual',
        description: "Make my dream become true",
        publication_date: "08/08/2021",
        location: 'Piedras Negras, Coahuila.',
        image: 'Mahahual_paradise.jpg',
        fundraise_destination: 'I will appreciate your support.',
        fundraise_account: 1940573111,
        results: 'It is the first time I post',
        expiration_date: '09/09/2021',
    });

    console.log('post seeded');

    process.exit();
});