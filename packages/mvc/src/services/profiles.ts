import { Document } from "mongoose";
import { Profile } from "../../../ts-models";
import { ProfileModel } from "../mongo/profile";

function index(): Promise<Profile[]> {
  return ProfileModel.find();
}

// * updated to return the profile object, also changed 'userid' to '_id', within this method
// function get(_id: string): Promise<Profile> {
//   return ProfileModel.findOne({ _id })
//     .exec()
//     .then((profile) => {
//       if (!profile) throw `${_id} Not Found`;
//       return profile;
//     })
//     .catch((err) => {
//       throw `${_id} Not Found`;
//     });
// }

//TODO : FIX
// * This is what the get method used to be, before I changed it to work with getting a profile by userid
// * The profile feature works with this one, but not the above one, but the above one works for the chatRoom get profile request
function get(userid: String): Promise<Profile> {
  return ProfileModel.find({ userid })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}

function create(profile: Profile): Promise<Profile> {
  const p = new ProfileModel(profile);
  return p.save();
}

function update(userid: String, profile: Profile): Promise<Profile> {
  return new Promise((resolve, reject) => {
    ProfileModel.findOneAndUpdate({ userid }, profile, {
      new: true,
    }).then((profile) => {
      if (profile) resolve(profile);
      else reject("Failed to update profile");
    });
  });
}

export default { index, get, create, update };
