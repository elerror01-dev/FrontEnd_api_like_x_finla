import "./Profile.css";
import perfil from "../../../images/imgprofile.png";
const Profile = () => {
  return (
    <div className="profile site__section">
      <img className="profile__image" src={perfil} alt="Avatar" />
      <div className="profile__details">
        <h1 className="profile__name">Ramon Ernesto Garcia Navarro</h1>
        <button
          aria-label="Edit traveler profile"
          className="profile__edit-btn"
          type="button"
          id="button-edit"
        ></button>
        <p className="profile__bio">PhD in Information Technology</p>
      </div>
      <button
        aria-label="Add new place"
        className="profile__add-place-btn"
        type="button"
      ></button>
    </div>
  );
};
export default Profile;
