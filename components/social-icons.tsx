export function InstagramIcon(props: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden={props.title ? undefined : true}
      role={props.title ? "img" : "presentation"}
      className={props.className}
      fill="none"
    >
      {props.title ? <title>{props.title}</title> : null}
      <path
        d="M7.5 2.75h9A4.75 4.75 0 0 1 21.25 7.5v9A4.75 4.75 0 0 1 16.5 21.25h-9A4.75 4.75 0 0 1 2.75 16.5v-9A4.75 4.75 0 0 1 7.5 2.75Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 16.25A4.25 4.25 0 1 0 12 7.75a4.25 4.25 0 0 0 0 8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M17.25 6.85h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function FacebookIcon(props: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden={props.title ? undefined : true}
      role={props.title ? "img" : "presentation"}
      className={props.className}
      fill="none"
    >
      {props.title ? <title>{props.title}</title> : null}
      <path
        d="M13.5 21v-7h2.7l.55-3H13.5V8.75c0-.86.42-1.5 1.63-1.5h1.98V4.58c-.35-.05-1.55-.16-2.97-.16-2.93 0-4.93 1.78-4.93 5.03V11H6.5v3h2.7v7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
