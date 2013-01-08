var people = [];

var Person = function(options) {
    var self = {};

    self = $.extend(self, options);

    return self;
};

var people = {};

var andre = new Person({
    id: 'andre',
    name: 'Andre Hill',
    title: 'COO',
    school: 'Clark Atlanta University',
    major: 'MBA Marketing',
    picture_url: 'images/people/andre.png',
    experience: '5 years of market analytics, strategy and logistics',
    specialties: [
        'C-level negotiations',
        'Marketing strategy',
        'Operations'
    ]
});

var ryan = new Person({
    id: 'ryan',
    name: 'Ryan Chatman',
    title: 'Creative Director',
    school: 'Morehouse College',
    major: '',
    picture_url: 'images/people/ryan.png',
    experience: '10 years of professional graphic design & web development expertise',
    specialties: [
        'Web design',
        'Logo and brand identity creative'
    ]
});

var chris = new Person({
    id: 'chris',
    name: 'Chris Jackson',
    title: 'Software Developer',
    school: 'University of Michigan',
    major: 'Electrical Engineering',
    picture_url: 'images/people/chris.png',
    experience: 'IT professional with a passion for digital marketing',
    specialties: [
        'Web design',
        'Application Development',
        'Database Design'
    ]
});

var krystal = new Person({
    id: 'krystal',
    name: 'Krystal Mays',
    title: 'Market Research Analyst',
    school: 'Clark Atlanta University',
    major: 'Electrical Engineering',
    picture_url: 'images/people/krystal.png',
    experience: 'Experienced Market Analyst in various sectors including real estate and retail',
    specialties:[
        'Market Research',
        'Survey creation and distribution',
        'Data compilation and interpretation (SPSS Software)'
    ]
});

var arthur = new Person({
    id: 'arthur',
    name: 'Arthur Sawyer',
    title: 'Video Production Specialist',
    school: 'Michigan State University',
    major: 'Videography',
    picture_url: 'images/people/arthur.png',
    experience: 'Turns visuals into art: Film-Direct-Produce',
    specialties: [
        'Music Videos',
        'Promotional Videos',
        'Event Coverage'
    ]
});

var clint = new Person({
    id: 'arthur',
    name: 'Arthur Sawyer',
    title: 'Account Executive',
    school: 'Michigan State University',
    major: '',
    picture_url: 'images/people/clint.png',
    experience: '12 years experience in web solutions and IT Management',
    specialties: [
        'Political campaign Management',
        'Web design'
    ]
});

var trish = new Person({
    id: 'arthur',
    name: 'Trish Dave',
    title: 'Experiential Specialist',
    school: 'Michigan State University',
    major: 'Communications-Mass Media/Public Relations',
    picture_url: 'images/people/trish.png',
    experience: 'Experienced Product Specialist and Brand Ambassador for various brands',
    specialties: ['Ride & Drive events',
        'Promotional campaigns',
        'Spokesmodel  representation'
    ]
});

var stesha = new Person({
    id: 'arthur',
    name: 'Stesha Mays',
    title: 'Content Manager',
    school: 'DePaul University',
    major: 'Communications',
    picture_url: 'images/people/stesha.png',
    experience: '10 years of media and financial sales',
    specialties: [
        'Copywriting',
        'Persuasive Communication',
        'Content Management'
    ]
});

people.andre = andre;
people.chris = chris;
people.ryan = ryan;
people.krystal = krystal;
people.clint = clint;
people.trish = trish;
people.stesha = stesha;
people.arthur = arthur;