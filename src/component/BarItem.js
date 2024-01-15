import { useSpring, animated } from "@react-spring/web";

export const BarItem = (props) => {
  const { name, value, barHeight, barWidth, x, y } = props;

  const springProps = useSpring({
    from: {
      value: 0,
      barWidth: 0,
      valueOpacity: 0,
    },
    to: {
      value: value,
      barWidth: barWidth,
      valueOpacity: barWidth > 80 ? 1 : 0,
      y,
    },
    config: {
      friction: 100,
    },
  });

  return (
    <g>
      <animated.rect
        x={x}
        y={springProps.y}
        width={springProps.barWidth}
        height={barHeight}
        opacity={0.7}
        stroke="#62c4e3"
        fill="#118DFF"
        fillOpacity={0.3}
        strokeWidth={1}
        rx={1}
      />
      <animated.text
        x={springProps.barWidth?.to((width) => 240)}
        y={springProps.y?.to((y) => y + barHeight / 2)}
        textAnchor="end"
        alignmentBaseline="middle"
        fontSize={12}
        fill="#000"
        fontFamily="Arial, sans-serif"
      >
        {springProps.value?.to((value) => value.toFixed(0))}
      </animated.text>
      <animated.text
        x={x + 7}
        y={springProps.y?.to((y) => y + barHeight / 2)}
        textAnchor="start"
        alignmentBaseline="middle"
        fill="#000"
        fontSize={12}
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        {name}
      </animated.text>
    </g>
  );
};
