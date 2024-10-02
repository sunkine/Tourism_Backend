import mongoose from "mongoose";

// const tourSchema = new mongoose.Schema({
//     TourID: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     Price: {
//         type: Number,
//         required: true,
//     },
//     Description: {
//         type: String,
//         required: true,
//     },
//     GroupSize: {
//         type: Number,
//         min: 1,
//     },
//     Photo: {
//         type: String,
//         required: true,
//     },
//     Tag: {
//         type: String,
//         required: true,
//     },
// }, {timestamps: true})
const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },

    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Tour = mongoose.model("Tour", tourSchema);
export default Tour;
