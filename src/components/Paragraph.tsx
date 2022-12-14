const Paragraph = (props: { text: string; colour: string; additional?: string }) => {
      return (
            <p
                  className={`text-center text-[15px] font-medium leading-6 text-${props.colour} ${
                        props.colour === "black" ? "opacity-50" : "opacity-75"
                  } ${props.additional}`}
            >
                  {props.text}
            </p>
      );
};

export default Paragraph;
