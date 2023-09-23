import { Schema, model, models } from "mongoose";

const eventSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Admin",
    required: [true, "Admin is required"],
  },
  name: {
    type: String,
    required: [true, "Event name is required"],
    unique: [true, "Event name already exists"],
  },
  collaborators: {
    type: Array,
  },
});

const Event = (models && models.Event) || model("Event", eventSchema);
export default Event;
