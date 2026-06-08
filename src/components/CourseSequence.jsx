// Course sequence / program pathway: freshman -> senior. Rendered as a roadmap.
export default function CourseSequence({ sequence }) {
  return (
    <ol className="sequence">
      {sequence.map((year, i) => (
        <li className="sequence__year" key={i}>
          <span className="sequence__grade">{year.grade}</span>
          <ul className="sequence__courses">
            {year.courses.map((c, j) => (
              <li key={j}>{c}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}
