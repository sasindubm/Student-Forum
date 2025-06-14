exports.getHome = (req, res) => {
    res.render('home', { title: 'Home', navigation: true });
};

exports.getLogin = (req, res) => {
    res.render('login', { title: 'Login', navigation: false });
};

exports.getRegister = (req, res) => {
    res.render('register', { title: 'Register', navigation: false });
};

exports.getPastpaper = (req, res) => {
    res.render('pastpaper', { title: 'Pastpapers', navigation: false });
};

exports.getSyllabus = (req, res) => {
    res.render('syllabus', { title: 'Syllabus', navigation: false });
};

exports.getAssesment = (req, res) => {
    res.render('assesment', { title: 'Assesments', navigation: false });
};

exports.getPage1 = (req, res) => {
    res.render('page1', { title: 'Page1', navigation: false });
};