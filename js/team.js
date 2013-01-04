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
    picture_url: '../images/people/andre.png'
});

var chris = new Person({
    id: 'chris',
    name: 'Chris Jackson',
    school: 'University of Michigan',
    major: 'Electrical Engineering',
    picture_url: '../images/people/chris.png'
});

people.andre = andre;
people.chris = chris;