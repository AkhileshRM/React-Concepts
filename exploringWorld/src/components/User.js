const User = ({name}) => {
  return (
    <>
      <div className="user-card">
        <h2>{name}</h2>
        <h3>Location: Bangalore</h3>
        <h4>Contact: akhilesh.madhyastha@gmail.com</h4>
      </div>
    </>
  );
};

export default User;
