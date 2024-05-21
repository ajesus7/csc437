import { Document } from "mongoose";
import { Profile } from "../../../ts-models";
import { ProfileModel } from "../mongo/profile";

function index(): Promise<Profile[]> {
  return ProfileModel.find();
}

// * updated to return the profile object, also changed 'userid' to '_id', within this method
function get(_id: string): Promise<Profile> {
  return ProfileModel.findOne({ _id })
    .exec()
    .then((profile) => {
      if (!profile) throw `${_id} Not Found`;
      return profile;
    })
    .catch((err) => {
      throw `${_id} Not Found`;
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
