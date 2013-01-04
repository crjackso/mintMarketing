var people = [];

var Person = function(options) {
    var self = {};

    self.id = options.id;
    self.name = options.name;
    self.school = options.school;
    self.major = options.major;
    self.picture_url = options.picture_url;

    return self;
};

var people = {};

var andre = new Person({
    id: 'andre',
    name: 'Andre Hill',
    school: 'Clark Atlanta University',
    major: 'MBA Marketing',
    picture_url: 'images/people/andre.png'
});

var ryan = new Person({
    id: 'ryan',
    name: 'Ryan Jackson',
    school: 'University of Michigan',
    major: 'Electrical Engineering',
    picture_url: 'images/people/ryan.png'
});

var chris = new Person({
    id: 'chris',
    name: 'Chris Jackson',
    school: 'University of Michigan',
    major: 'Electrical Engineering',
    picture_url: 'images/people/chris.png'
});

var krystal = new Person({
    id: 'krystal',
    name: 'Krystal Mays',
    school: 'University of Michigan',
    major: 'Electrical Engineering',
    picture_url: 'images/people/krystal.png'
});

var arthur = new Person({
    id: 'arthur',
    name: 'Arthur Sawyer',
    school: 'University of Michigan',
    major: 'Electrical Engineering',
    picture_url: 'images/people/arthur.png'
});

var clint = new Person({
    id: 'arthur',
    name: 'Arthur Sawyer',
    school: 'University of Michigan',
    major: 'Electrical Engineering',
    picture_url: 'images/people/clint.png'
});

var trish = new Person({
    id: 'arthur',
    name: 'Trish Dave',
    school: 'University of Michigan',
    major: 'Electrical Engineering',
    picture_url: 'images/people/trish.png'
});

var stesha = new Person({
    id: 'arthur',
    name: 'Stesha Mays',
    school: 'University of Michigan',
    major: 'Electrical Engineering',
    picture_url: 'images/people/stesha.png'
});

people.andre = andre;
people.chris = chris;
people.ryan = ryan;
people.krystal = krystal;
people.clint = clint;
people.trish = trish;
people.stesha = stesha;
people.arthur = arthur;