/*

This file contains the content of the site. All personal information, links, images, etc
are stored here in dictionaries which are them called from the proper pages.

Some pages will apply a style logic depending on the format of the dictionary. 
See comments below for more information.

*/

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
};

/**
 *************************************************************************************
 * Home page
 *************************************************************************************
 */

// Initial greeting
const greeting = {
  title: "Welcome 🙏🏽",
  title2: "Ryan",
  logo_name: "ryan.h()",
  // nickname: "harry / picleric",
  full_name: "Ryan Headley",
  subTitle:
    "Data Scientist, Full Stack Developer, World Traveller, Life Long Learner.",
  resumeLink: "https://www.linkedin.com/in/ryanheadley-dev/",
  mail: "mailto:ryan.headley@me.com",
};

// Contact links
const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/iry47/",
  linkedin: "https://www.linkedin.com/in/ryanheadley-dev/",
  gmail: "ryan.headley@me.com",
  facebook: "",
  instagram: "https://www.instagram.com/iry47/",
};

// Two column image-text style sections with button link
// Travel and Computer Science
const skills = {
  data: [
    {
      title: "Travel",
      fileName: "CloudInfraImg",
      skills: [
        "🌎 Extensive travel throughout multiple continents",
        "🌍 Polyglot: English 🇨🇦, French 🇫🇷, Spanish 🇪🇸, Portuguese 🇧🇷",
        "🌏 Experience in hospitality, sports, permaculture",
      ],
      softwareSkills: [
        {
          skillName: "Palm",
          fontAwesomeClassname: "emojione:palm-tree",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Mountain",
          fontAwesomeClassname: "emojione:mountain",
          style: {
            color: "#FFCA28",
          },
        },
      ],
      link: "/travel",
    },
    {
      title: "Computer Science",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating a variety of machine learning and other A.I models",
        "⚡ Engineering the full data pipeline from quality to observability",
        "⚡ Develop highly interactive User Interfaces and Backend for web applications",
        "⚡ Integration of third party services such as AWS",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },

        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
      ],
      link: "/experience",
    },
  ],
};

/**
 *************************************************************************************
 * Travel page
 *************************************************************************************
 */

// Blog cards linking to page
const blogs = {
  blogs: [
    {
      title: "Travel the Amazon river by boat",
      description:
        "The Amazon doesn't have many roads, so boats are the main method of transportation. Find out what is required and what to expect to explore the lungs of the earth!",
      image: "amazon-river-cruise.jpg",
      url: "amazon-boat",
      color_code: "",
    },
    {
      title: "Work a ski season in the Alps",
      description:
        "Explore working a season in one of the most known ski locations in the world.",
      image: "champagny-crew.jpg",
      url: "ski-season",
      color_code: "",
    },
    {
      title: "Benefits of staying in hostels",
      description:
        "How staying in Hostels can help every traveller connect to and learn the local culture.",
      image: "banana-group.jpg",
      url: "hostels",
      color_code: "",
    },
  ],
};

/**
 *************************************************************************************
 * Education page
 *************************************************************************************
 */

// Degrees
const degrees = {
  degrees: [
    {
      title: "EPITECH",
      subtitle: "Master in Artificial Intelligence",
      logo_path: "epitech_logo.png",
      alt_name: "European Institue of Technology",
      duration: "Paris, France 2020 - 2022",
      descriptions: [
        "⚡  A Masters of Computer Science with a specialty in A.I. in a co-op system, meaning I studied and worked professionally in parallel. Checkout out my experience and projects pages for more info! .",
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.srmist.edu.in/",
    },
    {
      title: "Queen's University",
      subtitle: "Bachelors in Computer Science",
      logo_path: "queens_logo.png",
      alt_name: "Queen's University",
      duration: "Kingston, Canada 2014 - 2025",
      descriptions: [
        "A second Bachelor's in Computer Science.",
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.epitech.eu/",
    },
    {
      title: "Queen's University",
      subtitle: "Bachelors in Mechanical Engineering",
      logo_path: "queens_logo.png",
      alt_name: "Queen's University",
      duration: "Kingston, Canada 2010 - 2014",
      descriptions: [
        "My first Bachelor's degree in Mechanical Engineering.",
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.queensu.ca/",
    },
  ],
};

// Certifications
const certifications = {
  certifications: [
    {
      title: "AWS Cloud Practitioner",
      subtitle: "Amazon Web Services",
      logo_path: "aws_logo.png",
      certificate_link: "",
      alt_name: "AWS Cloud Practitioner",
      color_code: "#2AAFED",
    },
    {
      title: "Security Awareness Training",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link: "",
      alt_name: "Security Awareness Training",
      color_code: "#2AAFED",
    },
    {
      title: "Machine Learning",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link: "",
      alt_name: "Security Awareness Training",
      color_code: "#2AAFED",
    },
    {
      title: "Data Science",
      subtitle: "Kaggle",
      logo_path: "kaggle.jpg",
      certificate_link: "",
      alt_name: "Data Science",
      color_code: "#2AAFED",
    },
    {
      title: "Deep Learning",
      subtitle: "Kaggle",
      logo_path: "kaggle.jpg",
      certificate_link: "",
      alt_name: "Deep Learning",
      color_code: "#2AAFED",
    },
    {
      title: "Time Series",
      subtitle: "Kaggle",
      logo_path: "kaggle.jpg",
      certificate_link: "",
      alt_name: "Time Series",
      color_code: "#2AAFED",
    },
  ],
};

/**
 *************************************************************************************
 * Article page
 *************************************************************************************
 */

// Each article has a specific style:
// General title and description followed by sections
// Each section has a bullet list followed by a clickable hidden dropdown text
const articles = {
  "ski-season": {
    title: "Getting a Ski Season Job",
    description:
      "All the information you need to get and work a ski season job",
    sections: [
      {
        text:
          "I spent 5 months living in a small French town called Champagny en Vanoise, collectively running a chalet complex with 5 other people. Growing up far from the mountains and choosing hockey as my primary winter sport, this was my first opportunity to indulge in snowboarding for a consecutive period of time - I even learned to love skiing as well! For anyone who loves to ski, this is an excellent way to make a bit of money while having an experience of a lifetime. However, organising it all can seem daunting and there’s a lot of hurtles in the way before you arrive: choosing a resort, finding a company/job and dealing with visas can all seem overwhelming, but like everything is just taking one step at a time! \n As much as I wish I could say I’ve been to tons of resorts around the world, my experience is actually quite limited. Because of this I’m going to talk more about the resort I was at and what I learned, and hopefully the knowledge can help you in your quest!",
        dropdown:
          "My travels are rarely pre-organised or executed according to plan, and this was no exception. A friend and I realised in Barcelona how much we loved to snowboard and decided to embark on the mission of finding a job for the upcoming season. Having lived in England for half of her life, she was aware that it is very common for English families to pay an English company to organise their ski trip to the alps, including hosting them in an all-inclusive chalet. Therefore it is common for English people to work for English companies in the French alps. Perfect! She’s already English and me being Canadian can get a visa for the UK no problem. France is popular choice and bonus for me because I already speak the language. We began our search on the variety of English websites with job postings for seasons in France and started applying. A couple of the big sites we used and found helpful were : \n Many of the companies only accepted employees with EU nationality because, as I learned later on, visas become complicated for non EU citizens, working for a country outside of the Schengen zone but living inside the Schengen zone. In the end, our decision was entirely based on putting all our eggs into the one basket that appeared to have the best chance of working out, and it did !",
      },
      {
        title: "Choosing a Resort",
        images: ["champagny.jpg", "champagny-logo.jpg"],
        points: [
          "Each resort has different levels of party - quiet, expensive - cheap, expert - beginner",
          "Life is a lot easier if you can choose a location somewhere you’re legally allowed to work.",
          "When choosing a country, think about the language",
          "If you’re skiing in one place everyday for months, it’s nice if there’s a lot of terrain",
        ],
        dropdown:
          "Champagny en Vanoise is a small ski resort on the south side of the mountain, with a view across the valley to Les Trois Vallées (super fancy). Luckily, even though Champagny has only two chairlifts and a handful of runs, it connects to La Plagne on the north side of the mountain and Les Arcs across a valley in the north to make the combined terrain of Paradiski. We had access to 141 chairlifts, 967 accomodation options, 475 runs to make up 425km of downhill skiing, 12 ski villages, 5 ski resorts, …I think you get the picture. I really loved the ability to not only explore all the terrain during the day, but also come back to a smaller, authentic French resort that wasn’t filled with vacationers looking to party every single night. Champagny has 1 bar, 1 bar/restaurant, 6 hotels, 1 gondola…the opposite picture. We were easily able  to go out for a quiet beer after a long day of work and ski but also had awesome reggae events to look forward to every couple weeks in Code Bar. We often hear life is about balance and that’s what we found in Champagny, which helps explain why the same people seem to return every year.",
      },
      {
        title: "Choosing a Company",
        images: ["marmotte.jpg", "pool.jpg"],
        points: [
          "What does the company include? Ski pass, equipment, food, bed?",
          "What would your role and schedule be? Could you do this for almost everyday for 5 months?",
          "Big company with big staff and big party, the opposite or somewhere in between?",
          "What facilities does it have? Access to a hot tub after long days or work and ski can be a life saver.",
        ],
        dropdown:
          "I was hired by Barrelli Ski, who operates two large chalets with a capacity of ~15 people each and two smaller apartments with a capacity of ~5. Our team of six was divided in to 2 managers, 2 head chefs and 2 assistants who worked together to provide breakfast, afternoon tea, dinner and cleaning 6 days a week (same meals every week). One of the six days was changeover day, spent almost entirely deep cleaning all the chalets and the seventh day (Wednesday) was completely off. We were able to ski everyday (minus changeover) from about 11-4, which is an average time that was shorter in the beginning of the season and longer after we ironed out the kinks of the job. The accommodation for the staff were private rooms for each couple — the owner realised after several years that couples in the close-knit environment last longer and were generally happier throughout the season. All the staff also received a ski pass for the season, rental equipment, food, and a minimum salary of £400 / month which accumulates slowly but surely when you have no expenses.",
      },
      {
        title: "Day in the Life",
        images: ["champagny-food.jpg", "mountain-bar.jpg"],
        points: [
          "7am: wake up and start making breakfast",
          "8am : Breakfast ready: while all times were decided by guests, the average was pretty standard",
          "9-10am: Guests left for the slopes and finishing the quick clean of bedrooms and bathrooms",
          "11am-4pm Enjoying the slopes!",
          "4-6pm: Relax, hot tub, snack.",
          "6pm: Starting dinner prep.",
          "8pm: Guests eating.",
          "10pm: Dinner finished and rest of the night free to sleep, go for a drink, or anything in between.",
        ],
      },
      {
        title: "Visas",
        points: [
          "Some companies may help with visas.",
          "If you’re set on finding a job then start the visa process right away and avoid complications with your start date.",
        ],
        dropdown:
          "Being Canadian, I got the Youth Mobility Visa for the UK which has a duration of 2 years. It costed £100 and took about a month to get, although I went about it in a very round-about way. At the time of realising that the job hunt was serious and we were going to make it happen, I had been working in Barcelona with a Spanish visa and already booked a flight to Poland to begin a tour of eastern europe. So I ended up being a Canadian with a Spanish residency applying for an English visa in Warsaw but getting it sent to Budapest (where I planned to be around the time it would be sent). I still don’t fully understand the whole process, and if my Spanish residency affected my ability to apply for the visa outside of the UK, but point is to avoid finding yourself in a similar situation, and if you find yourself in the exact situation then you can rest assured that it is possible. \n\n Showing my visa to my employer was all I needed to be employed, placed in payroll and have everything set on the english side. Living in France, inside of the Schengen zone without a Schengen visa was a different story. There is another level of documentation that has to be done by you/your employer to post you in France. This is something that is best to talk to your employer about and confirm that everything is done correctly. ",
      },
      {
        title: "Conclusion",
        images: ["champagny-crew1.jpg", "powder.jpg"],
        text:
          "While the repetitiveness of the job became tiresome and living in such close proximity to few people for so long also had its complications, this was one of the best jobs I’ve ever had and an experience I will value for the rest of my life. Skiing requires such specific conditions and is hard for the average person to enjoy any day they’d like to, so if you love the sport then this is an easy, affordable way to make it happen. The job comes in so many different flavours, and if you’re interested in the opportunity then there’s definitely a place that meets your specific requirements. Don’t take my experience as a representation of the average, but use it to help direct your compass to your ideal job!",
      },
    ],
  },
  hostels: {
    title: "Staying in Hostels",
    description:
      "First time in going to a hostel? This article explains how to find one, how to prep and what to expect.",
    sections: [
      {
        text:
          "Hostels are the home-bases of backpackers: a place to seek shelter, information and friends when arriving in a place where you know nothing and no-one. While it’s rare to find hostels that offer everything you want and just how you like it, I very rarely leave a hostel dissatisfied with its service as a whole. When embarking on your first trip, hostels can seem intimidating and uncomfortable. I’ve met many people who actively try to avoid them. I believe that everyone can benefit from staying in a hostel, and the only thing standing in your way is knowing where to look, what to look for and how to prepare for your stay. I’m not only going to look at hostels from the point of view of a guest, but also for people looking for volunteering opportunities. Over the years I’ve accumulated a lot of experience on both sides of the hostel world, and I hope sharing my experience can make your life easier and maybe even persuade you to try it out!",
      },
      {
        title: "Where to find a hostel",
        images: ["hostelworld.jpg", "booking.jpg"],
        points: [
          "If it is possible and makes sense, it’s always ideal to visit the hostel in person to feel out the environment and negotiate a price.",
          "Hostelworld and Booking.com are the sites I use and I believe are the most popular, but maybe you’ll find one you prefer.",
          "HostelWorld is my favourite for User Interface and tends to have a lot of reviews for each hostel. Each reservation has a booking fee which means credit cards are always required.",
          "Booking.com provides non-hostel options, more customisability to your search and depending on where you are in the world it can show more hostels than HW (often true in South America). Most reservations don’t require a booking fee and often you can book without even using a credit card.",
        ],
        dropdown:
          "While in Europe I exclusively used HostelWorld. It was what I was initially recommended and pretty much the only site I ever heard anyone using. The UI is great and since everyone was using it, it was filled with options and reviews. When I got to South America I had to start using Booking.com after I noticed that HW was often lacking in options and sometimes didn’t have a single one, where Booking.com always came through. I also learned later on that I could book through Booking.com without paying for the reservation and the prices were sometimes cheaper than what I saw on HW. Whichever one you end up using, it may be nice to quickly check the other one before making a reservation just in case the price is different. When travelling during high season (it varies depending on location but school vacations are usually a good rule of thumb) it is best to reserve a couple days before because hostels tend to fill up, especially if you’re going to a party place for the weekend. Travelling during low season is the opposite and I almost never make reservations — not saying there’s no risk of hostels filling up, you should do what you believe is best. You can call the hostel a few days before your planned arrival to ask how many beds are available the night you’re looking to book. I find that hostels often don’t list all the beds on these sites all at once. If I’m arriving early enough in the day, I prefer to choose an area that has a few options and go to visit each of them to pick out my favourite and negotiate prices. If I don’t feel like walking around (which happens after long days of travel) then I still wouldn’t reserve and keep the option of abandoning my first choice if it is really bad. After some trial an error you’ll design your own system and in no time you’ll be consistently pleased with hostels since you’ve already set yourself up to arrive in a place that meet your basic requirements. Now what are some basic requirements?",
      },
      {
        title: "Volunteering",
        text:
          "When looking for volunteering opportunities in hostels, the websites are completely different and often require a paid subscription. Even if you’re travelling only for several weeks, if you have the time to stay a week volunteering then I believe you can quickly pay off the subscription through the money saved on accommodation and food. I bought a subscription to Workaway (US$35): the first site that I was introduced to that has a list of volunteering opportunities categorised first by area and later by much more. This site as a policy of a recommended 25h of volunteering per week for free accommodation and at least some food, however I rarely chose a place that didn’t have all food included as well. Outside of Workaway I’ve heard of WorldBackpackers, which I believe offers almost the same service for a similar price, but I’m sure there’s more out there so don’t be afraid to do your own research!",
        points: [
          "I use workaway.info for US$35 / year",
          "Average of 5h / day of volunteering for food and accommodation.",
          "Tasks can be anything from cleaning to reception work to leading activities.",
        ],
        dropdown:
          "When looking for volunteering opportunities in hostels, the websites are completely different and often require a paid subscription. Even if you’re travelling only for several weeks, if you have the time to stay a week volunteering then I believe you can quickly pay off the subscription through the money saved on accommodation and food. I bought a subscription to Workaway (US$35): the first site that I was introduced to that has a list of volunteering opportunities categorised first by area and later by much more. This site as a policy of a recommended 25h of volunteering per week for free accommodation and at least some food, however I rarely chose a place that didn’t have all food included as well. Outside of Workaway I’ve heard of WorldBackpackers, which I believe offers almost the same service for a similar price, but I’m sure there’s more out there so don’t be afraid to do your own research!",
      },
      {
        title: "How to Choose a Hostel",
        images: ["banana-yoga.jpg", "banana-hammocks.jpg"],
        points: [
          "Read reviews, being the truest way to learn about the vibe and quality of everything they offer.",
          "Look at the map, because not everyone wants to be an hour from the centre and vice-versa.",
          "Make a list of requirements that you’d like the hostel to have. Look at the filters available on the sites for ideas.",
          "Photos are always nice to look at but aren’t guaranteed to be true.",
        ],
        dropdown:
          "Before searching for a hostel, it’s important to know what sort of environment you’re looking for. Great hostels have spaces for everyone, but often hostels can be classified as calm or party, great facilities (bed, bathrooms, common areas) or okay facilities, etc. Most of the complaints I hear about hostels are when someone ends up in a hostel providing an incompatible environment for said traveler. This doesn’t mean all hostels are bad, this just means you could have chosen better. I personally change the type of hostel I stay in depending on my mood of the day, whether I’m looking to work in a comfy common room, be really social and party or maybe I’m just looking find  the cheapest single room. When scrolling through a list of hostels, I like to have a couple basic filters to reduce the list. I personally always order by price, and then usually only look at hostels with breakfast included since I enjoy waking up with the first step of the day taken care of for me so I can focus on organising the day ahead. I also often have an idea of where I’d like the hostel to be located, and even if I don’t I still look at the map and judge its location based on points of interest like city centre, water, transportation, etc. Once you have your list of initial requirements set then you can take a quick look at the picture, rating and number of reviews before diving into the hostel’s page. There I usually glance at the description, but if in a rush the only important thing in my mind is reading the reviews. This is where you’ll find out if what you’re seeing about the hostel is true, and what quality they offer. I’m usually looking for comments about the quality of the breakfast, wifi and environment, whether they have security lockers and everything else that catches my eye. If there is only one thing you want to do when looking for hostels then reading reviews is it.",
      },
      {
        title: "Volunteering",
        points: [
          "Clear communication with host.",
          "Ask a lot of questions before arriving.",
          "Confirm what your exact job will be.",
        ],
        dropdown:
          "Before I get into it, I want to refer you to the first paragraph of the hostel section above because that is equally true for volunteering: it’s all about the environment you’re looking to be in. When looking for any volunteering opportunity, it’s important to clearly communicate with your host about what you are looking for and what they are looking for. The key to being in a happy environment is avoiding negative surprises. Be sure you’re happy doing the volunteering work, and always confirm exactly what they want you to do because it can differ from what is written on their profile. When working in hostels I, after doing a lot of it, avoiding going to places that had me cleaning bathrooms. I looked exclusively for reception work, leading activities or working at the bar. I also looked specifically for places that offer at least 1 meal a day and I often ended up with all 3 meals included, which is the key to saving money. Outside of this, read above at choosing a good hostel since it all applies here as well. ",
      },
      {
        title: "Preparing for a Hostel",
        images: ["hostel1-bed.jpg"],
        points: [
          "Tapestry style sheet: one of the essentials in my travel kit, acting as a beach blanket, hostel bed curtain, bus blanket and even a towel when I forget my real one!",
          "Lock: hostels often don’t provide locks for their lockers without renting or selling them, and when there isn’t a locker it’s nice to be able to lock your bag shut.",
          "Universal adapter: an adapter that fits into all plugs, accepts all plugs and also acts as a power bar with two usb ports is something you will use every day of your trip.",
          "Ear plugs / eye cover: I personally tend to always sleep well so I don’t pack these, but won’t deny that having these handy can make your life a lot better. ",
        ],
        dropdown:
          "I bought a tapestry (which is what I called a large thin sheet with a cool design) early on in my trip and it rarely leaves my side. It has so many uses in any trip, and having a little bit of privacy in bed is priceless. Works best when you have a bottom bunk in a corner, and when combined with your towel you’ve created a sealed pod (some hostels already offer pods with curtains, and more and more are popping up every day). Often rooms have some sort of locker service, but either way it’s nice have a lock to lock your bag when it’s out of your side behind the curtain. And while the curtain provides a bit of blockage when the light is turned on (depending on the curtain) it may still be nice for you to have an eye-cover and earplugs. If your in a hostel than it's all the same as above. Just make sure to ask your host if there's anything you'll need to bring!",
      },
      {
        title: "Conclusion",
        images: ["hostel1-group.jpg", "banana-group.jpg"],
        text:
          "Outside of having the things to make your visit a little more comfortable, the key to enjoying the hostel is to use it for its purpose: to meet fellow travellers! Don’t hesitate to spark up a conversation, and if feeling a little too shy to do so then just wait and smile and I can almost guarantee someone will say something to you. Often people in hostels are travelling alone and feeling just as vulnerable as you. While the rooms may be comfy, try and spend time in the common room and join activities that are either organised by the hostel or maybe just by someone walking out the door. That being said, if you’re already travelling with someone then try and invite along a new person with you. While you may not get along, it’s only a couple hours and it’s nice to change the travel group dynamic, especially if you’ve been travelling together for a long time. Aside from meeting people, hostels are also an awesome place to stop by if you need help: Whether you're only in the place for the day and looking to drop bags off; looking for some general information to get a lay of the land; or maybe you're alone in an airbnb but looking for a fun night out. Most hostels are there to help whether you're a client or not. Below I’ve thrown together a list of things I also love for a hostel to have.",
        points: [
          "Drinkable water",
          "Selection of cooking spices",
          "Provided towel",
          "Coffee and tea available all day",
          "Daily activities",
          "Dinners (free is preferred but even paid is nice)",
          "Pod beds with storage drawers",
          "Accessible plugs and personal light",
        ],
      },
    ],
  },
  "amazon-boat": {
    title: "Travel through the Amazon by boat",
    description:
      "Unsurpringsly and quite frankly, thankfully, the Amazon doesn’t have many roads. While the bigger cities are connected with airports, the rest of the jungle is exclusively boat access. I arrived in Belém, which is located at the foot of the Amazon River entering into the Atlantic ocean. Belém is the last stop along the northern coast of Brazil that is connected by highways. If you’re planning on taking a ferry through the jungle, there’s little information available online and what is available is incomplete if true at all. I’m going to take you through my experience and share the important information needed to buy your ticket, prepare for the boat and enjoy the ride. Each section has key points with an expandable full paragraph just underneath.",
    sections: [
      {
        text:
          "I spent 5 months living in a small French town called Champagny en Vanoise, collectively running a chalet complex with 5 other people. Growing up far from the mountains and choosing hockey as my primary winter sport, this was my first opportunity to indulge in snowboarding for a consecutive period of time - I even learned to love skiing as well! For anyone who loves to ski, this is an excellent way to make a bit of money while having an experience of a lifetime. However, organising it all can seem daunting and there’s a lot of hurtles in the way before you arrive: choosing a resort, finding a company/job and dealing with visas can all seem overwhelming, but like everything is just taking one step at a time! \n As much as I wish I could say I’ve been to tons of resorts around the world, my experience is actually quite limited. Because of this I’m going to talk more about the resort I was at and what I learned, and hopefully the knowledge can help you in your quest!",
        dropdown:
          "My travels are rarely pre-organised or executed according to plan, and this was no exception. A friend and I realised in Barcelona how much we loved to snowboard and decided to embark on the mission of finding a job for the upcoming season. Having lived in England for half of her life, she was aware that it is very common for English families to pay an English company to organise their ski trip to the alps, including hosting them in an all-inclusive chalet. Therefore it is common for English people to work for English companies in the French alps. Perfect! She’s already English and me being Canadian can get a visa for the UK no problem. France is popular choice and bonus for me because I already speak the language. We began our search on the variety of English websites with job postings for seasons in France and started applying. A couple of the big sites we used and found helpful were : \n Many of the companies only accepted employees with EU nationality because, as I learned later on, visas become complicated for non EU citizens, working for a country outside of the Schengen zone but living inside the Schengen zone. In the end, our decision was entirely based on putting all our eggs into the one basket that appeared to have the best chance of working out, and it did !",
      },
      {
        title: "Ticket Purchase",
        images: ["hidroviaria-belem.jpg"],
        points: [
          "Tickets are sold at the Hidroviaria (main port) in your respective location.",
          "Bigger cities like Belém have vendors in uniform, if not then look for official company stands — and don’t forget to bargain!",
          "Once your ticket is purchased, the moment your boat arrives you have the right to stay in the boat and save on accommodation.",
          "R$170 Belém to Manaus for 5 days 6 nights without food included (but available) on Nélio Corrêa",
          "R$320 Manaus to Tabatinga / Leticia for 6 days 6 nights with food included on Diamante",
        ],
        dropdown:
          "I arrived in Belém with little information about how exactly I was going to embark on my boat adventure. Speaking to my couchsurfing host and other people, they showed me several times, the schedules and prices that were available online. Luckily it had been 5 months that I had been in Brazil and almost a year that I had spent in South America and I knew to take all of this advice with a grain if not an entire rock of salt: in my experience, online resources in 2018 for South American countries and specifically Brazil were rough versions of the reality. Arriving at my first Hidroviaria in Belém, I was hardly surprised to find prices that were half those listed online and almost double the amount of departures times. The uniformed vendors throughout the station were immediately dropping from the listed price of R$340 to R$250 and in the end I paid R$170, which was an extremely low price and I actually received some unhappy reactions from passengers when checking into the boat. I also believe that prices change not only throughout the year and everyday leading up to your departure, but also depending on which hidroviaria you leave from: some locations (equivalently companies) seem more happy to bargain than others.",
      },
      {
        title: "Preperation",
        images: ["hammocks.jpg", "refeicao.jpg"],
        points: [
          "Hammock: where you’ll be spending the majority of your time so it’s worth it to get a comfortable one, which are always still very affordable.",
          "Blanket: lightweight so it's not a pain to carry around before and after, but something is definitely nice for the chilly, breezy nights",
          "Rope, locks: useful for adjusting your hammock to the perfect length and also for securing your belongings to the pallets or posts to prevent quick robberies",
          "Food: you’re in Brazil, so don’t expect anything other than rice, beans, spaghetti, meat and the occasional vegetable. Maybe, you’ll be lucky and have a day with fish",
          "Tupper: A plastic container is useful if you want to eat outside of the dinning room or if you want to take bigger portions - my boat with food included was buffet-style",
          "Water: Both trips I bought large bottles (5L) of water. In my mind, if you start to feel sick for whatever reason then having trustworthy water could make all the difference.",
          "Electronics: there are plugs on the boat but not always ideally placed. If you’re pre-downloading entertainment then an extension cord is a good idea",
          "Mosquitos: even when you’re close to the coast and where the mosquitos are, the wind created from the moving boat is sufficient to eliminate virtually all mosquitos.",
        ],
        dropdown:
          "The first and most important item in your checklist is a hammock. While private rooms are available for two people at double the price each, the majority of people end up spending over 15h a day in their hammock — a number I just made up, but I didn’t spend an abnormally large amount of time in my hammock and I easily got to 16h/day. I was actually gifted my hammock by a traveller that had just done the trip. The hammock was gifted to him and I gifted it to someone else, so keep your eyes peeled in hostels on your way there! Security on the boat is non-existant so it’s best to keep your things in sight or have them covered and tied down when there not. While saying this, my experience on the boat was nothing but positive: the majority of people on the boat are locals visiting family or friends and I often left bags in the company of new friends. The times to be vigilant are when people are entering and leaving the boat, whether that is at the port or when boats are attaching-on mid-river to sell food. I never had any trouble with the food on the boat, but some people did. I believe it helped that I had already spent so much time in the country and continent adjusting to the foreign bacteria. Minus the occasional soup or vegetable, the food is exclusively rice, beans, plain spaghetti and meat (usually chicken). I definitely suggest buying fruit and some tasty raw veggies before getting on the boat. I personally always bought water as well. Some boats have their water supplied by smaller boats which fill the tank with a hose: hard to believe is clean. While some boats bring in sealed 10L bottles of water and fill up the tank, there still no guarantee that the tanks are properly cleaned. Maybe I’m paranoid but I just feel more comfortable having trustworthy water while eating low nutritional food in a metal tank filled with hundreds of people cruising through the jungle. The boats always have chargers somewhere, and some more readily available than others. If you’re hoping to spend time in your hammock using your tech then I’d suggest getting a cheap extension cable and choosing your hammock location wisely. As a rule of thumb, never leave any device charging unattended. Even in boats with cameras and friendly looking people, it’s just too easy for someone to snatch it and never get caught. ",
      },
      {
        title: "Enjoying the Ride",
        images: ["boat-crew.jpg"],
        points: [
          "Choose a good hammock spot away from the bathrooms and closer to the middle (away from high foot traffic areas)",
          "Chat with the locals and practice your Portuguese ",
          "Be aware of the planned stops and take advantage of the time to explore the town, while being aware that these periods have the highest probability of theft.",
          "Coast watch: you’re on the boat to experience the jungle, don’t forget to look!",
        ],
        dropdown:
          "It may seem like choosing the perfect hammock spot is an important task, but the majority of the spots are all the same. Depending on the boat, the bathrooms might not even be in the same area as the hammocks, in which case you want to focus on being away from the footpaths and the entering sun from the windows. Don’t be afraid to ask the crew, because they are usually pretty familiar with the trip! I found it really nice to get to know the crew and people on board not only for Portuguese practice, but also to know what is going on: planned stops, duration, when a suspected thief is on board, etc. If you don’t know Portuguese or Spanish (they are so similar that conversations are possible between unilingual speakers) then don’t be afraid to communicate through the international body language — waving your hands and pointing at stuff! The first few days on the boat I was very paranoid about stops, staying in my hammock the entire time and waking up for every stop during the night. While I think this is an excellent way to prevent your things from getting robbed and avoid having a new neighbour above, below or too close to your hammock, it is kind of annoying and I quickly became more relaxed. My updated method was trying to find a neighbour that was staying around our hammocks to keep an eye on my big clothes bag that was tied down to the wooden pallet. With this friendly guard I left the boat with my small bag of important things and used the time to explore the city and usually hunt down some tasty açai. Extremely important to talk to the crew and find out the estimated stop time, because the boat doesn’t wait for late travellers and losing your clothes, hammock and rest of the trip is far from ideal. Something I’ve left for last but in my opinion the most important thing to do on the boat: watch the jungle! While things may look still, the amazon is always bursting with life and after days on the boat you’ll definitely be able to see dolphins, a large variety of birds and if you’re lucky snakes, monkeys, sloths and more! I lucked out but if you can then try and do the trip against the current, or heading west. While this adds a bit more time to the trip, the boat cruises along side the coast where the current is weaker so you spend far more time with great views of the jungle!",
      },
      {
        title: "Conclusion",
        text:
          "I found it best to treat the boat ride as a forced vacation where you have few options other than relaxing and getting to know the amazon and its people. Boat rides can also be an awesome time of isolation, if you’re looking to work on a project or maybe get into a new habit like meditation. But whatever way you decide to spend your time, something on everyone’s list should be to take it all in. You’re cruising through the lungs of the planet, a place with one of the highest degrees of diversity in the world of not only animals but us humans as well. You have the ability to interact with communities that have only recently become aware of the rapidly changing modern society that is directly threatening this local diversity of life. One of the most frustrating things to see was the threat from the inside: the amount of people throwing plastics and garbage into the streets, river and jungle! While many of you reading this have been taught how wrong this is, I believe the Brazilian locals are showing a lack education not a lack of respect so be patient and you can try to talk to them peacefully about the damage they’re unknowingly causing. I was really able to learn a lot from the jungle: widen my perspective outside of the western mentality and see that we are far from having all the answers. There is not only one way to live life, and the path to world peace will only be achieved through the knowledge of every community. ",
      },
    ],
  },
};

/**
 *************************************************************************************
 * Experience page
 *************************************************************************************
 */

// Experience cards
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've gained a wide array of experience between full stack development and data science.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Data Engineer and Full Stack",
          company: "Quant AI Lab",
          company_url: "https://quant.global/",
          logo_path: "quant_logo.png",
          duration: "Sept 2021 - Current",
          location: "Paris, France",
          description: `
          Having two primary job titles, my primary tasks alternate between creating the front and backend of the company's applications, and working with 
          data science to improve the analysis and machine learning models connected to the applications. In addition I worked through a wide array of
          organisational, operational and roadmapping tasks since I arrived at the creation of the team in France, which since has over doubled in size.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "A.I Engineer and Full Stack",
          company: "Pomelo Factory",
          company_url: "https://pomelofactory.fr/",
          logo_path: "pomelo_logo.webp",
          duration: "Oct 2020 - Aug 2021",
          location: "Paris, France",
          description: `Pomelo Factory creates marketing videos for companies of all sizes and also innovates in the sector of automating the video editing process for video editors thanks to A.I. (NLP).
          I’m responsable for the entire application, working on the front, back and all models of transcription.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "CTO / Solutions Architect",
          company: "Kidwelcome",
          company_url: "https://kidwelcome.com/",
          logo_path: "kidwelcome_logo.jpg",
          duration: "Feb 2019 - Dec 2020",
          location: "Paris, France",
          description: `
          Kidwelcome is a search engine for kid-friendly restaurants and hotels. Being one of two assiociates, 
          I was responsable for the technology of the company, both back end and front end of the web application.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "Full Stack",
          company: "Freelance",
          company_url: "https://ryanheadley.net/",
          logo_path: "logo_ryan.png",
          duration: "Sep 2018 - Oct 2020",
          location: "Remote",
          description: `While travelling through Europe and South America, I was working as a remote full stack developper. 
          Focusing primarily on website, my work alternated between CMS sites such as wordpress to personalized websites from the ground up.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "R&D Member",
    //       company: "Webarch Club",
    //       company_url: "https://www.webarchsrm.com/",
    //       logo_path: "Webarch.jfif",
    //       duration: "Mar 2020 - Nov 2020",
    //       location: "SRM IST Kattankulathur",
    //       description:
    //         "Member responsibilities were to help students in project planning, review issues and pull requests, ensure smooth progress and help juniors out in their difficulties.",
    //       color: "#4285F4",
    //     },

    //   ],
    // },
  ],
};

/**
 *************************************************************************************
 * Project page
 *************************************************************************************
 */

// Project page header
const projectsHeader = {
  title: "Projects",
  description:
    "The projects listed year are a brief resume of the types of problems that were solved during the past years of my Masters in A.I.",
  avatar_image_path: "projects_image.svg",
};

// Individual project cards
const projects = {
  data: [
    {
      id: "0",
      name: "Taxi Driver",
      url: "https://github.com/iry47/taxi_driver",
      description:
        "Use Reinforcement Learning to beat the Taxi-v3 environement in the OpenAI gym library.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "1",
      name: "Jarvis",
      url: "https://github.com/iry47/MVP_JARVIS",
      description:
        "Assemble an air monitoring IoT kit to record data and automatically transmit the information to the local server and then to the opensource Sensor Community project.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "fontisto:nodejs",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "IoT",
          iconifyClass: "eos-icons:iot",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Docker",
          iconifyClass: "logos:docker-icon",
        },
      ],
    },
    {
      id: "2",
      name: "Recommender",
      url: "https://github.com/iry47/recommender",
      description:
        "Take a database of client product purchases and create a recommendation system that suits an individual client's preferences.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "Pathfinder",
      url: "https://github.com/iry47/taxi_driver",
      description:
        "Create an application that takes a user's vocal request as input, and outputs the fastest train travel between the requested departure and destination, if in France.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "4",
      name: "VM Devops",
      url: "https://github.com/iry47/virtual_machine_devops",
      description:
        "Automatically create a virtual machine that launches and connects an Angular frontend, Java backend application and GitLab repository.",
      languages: [
        {
          name: "Gitlab",
          iconifyClass: "openmoji:gitlab",
        },
        {
          name: "Ansible",
          iconifyClass: "file-icons:ansible",
        },
        {
          name: "Bash",
          iconifyClass: "logos:bash",
        },
        {
          name: "Angular",
          iconifyClass: "logos:angular-icon",
        },
      ],
    },
    {
      id: "5",
      name: "Zoidberg",
      url: "https://github.com/iry47/zoidberg",
      description:
        "Create a machine learning model that takes X-rays of the thorax and determines the presence of pneumonia.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "6",
      name: "Sensor Sensei",
      url: "https://github.com/iry47/sensor_sensei",
      description:
        "Assemble an air monitoring IoT kit to record data and automatically transmit the information to the local server and then to the opensource Sensor Community project.",
      languages: [
        {
          name: "C++",
          iconifyClass: "logos:c-plusplus",
        },
        {
          name: "IoT",
          iconifyClass: "eos-icons:iot",
        },
      ],
    },
  ],
};

/**
 *************************************************************************************
 * Contact page
 *************************************************************************************
 */

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ryan_face_afro.png",
    description:
      "Always happy to chat 😁 so please don't hesitate to send me a message in one of the channels below ! ",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  blogs,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  articles,
};
