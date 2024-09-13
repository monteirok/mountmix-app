export default function Header(props) {
    // sets the value of 'frostedGlass' to "frosted-glass", if set when calling this component
    const frostedGlass = props.frostedGlass ? "frosted-glass" : "";

  return (
    <div className={`w-fit m-auto pt-4 sm:pt-10 px-4 sm:px-8 md:px-10 sm:leading-none break-word ${frostedGlass}`}>
        <h1 className={'leading-book-catering text-neutral-200 text-header sm:text-header-sm font-black text-center'}>{props.text}</h1>
    </div>
  );
}
