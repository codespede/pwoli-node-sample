import { Model } from 'pwoli';
import mongoose from 'mongoose';

const config = {
    DB_USERNAME: '',
    DB_PASSWORD: '',
    DB_DATABASE: 'pwoli_test',
    DB_HOST: '127.0.0.1',
    DB_PORT: 27017,
    NODE_ENV: 'development'
};

const usernamePassword = config.DB_USERNAME === '' || config.DB_PASSWORD === '' ? "" : `${config.DB_USERNAME}:${config.DB_PASSWORD}@`;
const mongoDB = `mongodb://${usernamePassword}${config.DB_HOST}:${config.DB_PORT}/${config.DB_DATABASE}` + `?authSource=${config.DB_DATABASE}&w=1`;

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true}, () => {
    
})
mongoose.set('debug', true);
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const orgSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
    },
    { collection: 'Organization', timestamps: true }
);

class Organization extends (Model) {

}
orgSchema.loadClass(Organization);
orgSchema.set('toJSON', {
  virtuals: true,
  transform: function (_doc, ret, _options) {
      ret.id = ret._id;
  }
});
const OrgModel = mongoose.model('Organization', orgSchema)
export { OrgModel as Organization };

const eventSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        contactPerson: {
            name: { type: String, required: true },
            email: { type: String, required: true, validate: [function(email) {
                var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return re.test(email)
            }, 'Please fill a valid email address'] },
            phone: { type: Number, required: true },
        },
        companies: [{
            title: { type: String, required: true },
        }],
        organization: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Organization'
        }
    },
    { collection: 'Event', timestamps: true }
);

class Event extends (Model) {
    getAttributeLabels() {
        return {
            title: 'Tiddtle',
            'contactPerson.name': 'Contact Person\'s Name',
            organization: 'Organization'
        }
    }
    get getter() {
        return (async () => {
            return this.title + 'getter';
        })();
    }
    get companiesCS() {
        return this.companies?.[0]?.title;
    }
    sampleFunc() {
        return this.id + Math.random();
    }
}

eventSchema.loadClass(Event);
eventSchema.set('toJSON', {
  virtuals: true,
  transform: function (_doc, ret, _options) {
      ret.id = ret._id;
  }
});
const EventModel = mongoose.model('Event', eventSchema)
export { EventModel as Event };