class User {
  name;
  email;
  age;
  role;

  constructor({ name, email, age, role }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.role = role;
  }

  get name() {
    return this.name;
  }

  get email() {
    return this.email;
  }

  get age() {
    return this.age;
  }

  get role() {
    return this.role;
  }

  set name(new_name) {
    this.name = new_name;
  }

  set email(new_email) {
    this.email = new_email;
  }

  set age(new_age) {
    this.age = new_age;
  }

  set role(new_role) {
    this.role = new_role;
  }
}

class Consumer extends User {
  previous_tempreture_level;
  previous_annoyance_level;

  constructor({
    name,
    email,
    age,
    role,
    previous_annoyance_level,
    previous_tempreture_level,
  }) {
    super(name, email, age, role);
    this.previous_tempreture_level = previous_tempreture_level;
    this.previous_annoyance_level = previous_annoyance_level;
  }
}

class Technical_Support extends User {
  specialization;
  position;

  constructor({ name, email, age, role, specialization, position }) {
    super(name, email, age, role);
    this.specialization = specialization;
    this.position = position;
  }
}

class World_Weather_Organization {
  actual_tempreture;
  feeling_tempreture;
  humidity;
  wind_speed;

  constructor({ actual_tempreture, feeling_tempreture, humidity, wind_speed }) {
    this.actual_tempreture = actual_tempreture;
    this.feeling_tempreture = feeling_tempreture;
    this.humidity = humidity;
    this.wind_speed = wind_speed;
  }

  get actual_tempreture() {
    return this.actual_tempreture;
  }

  get feeling_tempreture() {
    return this.feeling_tempreture;
  }

  get humidity() {
    return this.humidity;
  }

  get wind_speed() {
    return this.wind_speed;
  }

  set actual_tempreture(new_actual_tempreture) {
    this.actual_tempreture = new_actual_tempreture;
  }

  set feeling_tempreture(new_feeling_tempreture) {
    this.feeling_tempreture = new_feeling_tempreture;
  }

  set humidity(new_humidity) {
    this.humidity = new_humidity;
  }

  set wind_speed(new_wind_speed) {
    this.wind_speed = new_wind_speed;
  }
}

class Annoyance {
  check_time;
  annoyance_level;

  constructor({ check_time, annoyance_level }) {
    this.check_time = check_time;
    this.annoyance_level = annoyance_level;
  }

  get check_time() {
    return this.check_time;
  }

  get annoyance_level() {
    return this.annoyance_level;
  }

  set check_time(new_check_time) {
    this.check_time = new_check_time;
  }

  set annoyance_level(new_annoyance_level) {
    this.annoyance_level = new_annoyance_level;
  }
}

class Tempreture {
  check_time;
  actual_tempreture;
  feeling_tempreture;
  humidity;
  wind_speed;

  constructor({
    check_time,
    actual_tempreture,
    feeling_tempreture,
    humidity,
    wind_speed,
  }) {
    this.check_time = check_time;
    this.actual_tempreture = actual_tempreture;
    this.feeling_tempreture = feeling_tempreture;
    this.humidity = humidity;
    this.wind_speed = wind_speed;
  }

  get check_time() {
    return this.check_time;
  }

  get actual_tempreture() {
    return this.actual_tempreture;
  }

  get feeling_tempreture() {
    return this.feeling_tempreture;
  }

  get humidity() {
    return this.humidity;
  }

  get wind_speed() {
    return this.wind_speed;
  }

  set check_time(new_check_time) {
    this.check_time = new_check_time;
  }

  set actual_tempreture(new_actual_tempreture) {
    this.actual_tempreture = new_actual_tempreture;
  }

  set feeling_tempreture(new_feeling_tempreture) {
    this.feeling_tempreture = new_feeling_tempreture;
  }

  set humidity(new_humidity) {
    this.humidity = new_humidity;
  }

  set wind_speed(new_wind_speed) {
    this.wind_speed = new_wind_speed;
  }

  getWeather(region, date) {}
}

class Notification {
  type;
  topic;
  text;

  constructor({ type, topic, text }) {
    this.type = type;
    this.topic = topic;
    this.text = text;
  }

  get type() {
    return this.type;
  }

  get topic() {
    return this.topic;
  }

  get text() {
    return this.text;
  }

  set type(new_type) {
    this.type = new_type;
  }

  set topic(new_topic) {
    this.topic = new_topic;
  }

  set text(new_text) {
    this.text = new_text;
  }
}

class Technical_question {
  question;
  answer;
  is_answered;

  constructor({ question, answer, is_answered }) {
    this.question = question;
    this.answer = answer;
    this.is_answered = is_answered;
  }

  get question() {
    return this.question;
  }

  get answer() {
    return this.answer;
  }

  get is_answered() {
    return this.is_answered;
  }

  set question(new_question) {
    this.question = new_question;
  }

  set answer(new_answer) {
    this.answer = new_answer;
  }

  set is_answered(new_is_answered) {
    this.is_answered = new_is_answered;
  }
}
