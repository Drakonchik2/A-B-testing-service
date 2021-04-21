from mongoengine import *
import datetime

connect(host = "mongodb+srv://admin:admin@practice.ihww6.mongodb.net/test")

class Preland(EmbeddedDocument):
    name = StringField(required=True, max_length=50)
    link = StringField(required=True, max_length=50)
    uniqueness = IntField(required=True, default=0)
    views = IntField(default=0)
    transition = IntField(default=0)
    conversion = IntField(default=0)
    back_link = StringField(required=0, max_length=50)

class Offer(Document):
    name = StringField(required=True, max_length=50)
    timestamp = DateTimeField(default=datetime.datetime.now)
    views = IntField(default=0)
    transition = IntField(default=0)
    conversion = IntField(default=0)

    preland = ListField(EmbeddedDocumentField(Preland))

    traffic = ListField()

    closing_link = StringField(required=True, max_length=50)





