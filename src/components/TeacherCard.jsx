// Teacher photo + contact block. Photo is a placeholder until a real image is added.
export default function TeacherCard({ teacher }) {
  return (
    <div className="teacher-card">
      <div className="teacher-card__photo">
        {teacher.photo ? (
          <img src={teacher.photo} alt={`${teacher.name}, ${teacher.title}`} />
        ) : (
          <div className="placeholder-img" role="img" aria-label="Teacher photo placeholder">
            Photo
            <br />
            <span className="todo">TODO: add photo</span>
          </div>
        )}
      </div>
      <div className="teacher-card__info">
        <h3 className="teacher-card__name">{teacher.name}</h3>
        <p className="teacher-card__title">{teacher.title}</p>
        <p className="teacher-card__bio">{teacher.bio}</p>
        <ul className="teacher-card__contact">
          <li>
            <strong>Email:</strong> {teacher.email}
          </li>
          <li>
            <strong>Phone:</strong> {teacher.phone}
          </li>
        </ul>
      </div>
    </div>
  )
}
