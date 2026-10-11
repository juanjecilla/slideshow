import { Arrow, NodeBox, Reveal, Scene, Terminal, useScene, type Rect } from 'beatdeck';
import { A, Eyebrow, G, Meta, Statement } from '../ui';

const TOOL_JSON = [
  '{',
  '  "name": "searchTalks",',
  '  "description": "Finds talks by track and start time.",',
  '  "input_schema": {',
  '    "type": "object",',
  '    "properties": {',
  '      "track": { "type": "string" },',
  '      "after": { "type": "string", "description": "HH:mm" }',
  '    },',
  '    "required": ["track"]',
  '  }',
  '}',
];

const CLIENT: Rect = { x: 220, y: 420, w: 520, h: 170 };
const SERVER: Rect = { x: 1180, y: 420, w: 520, h: 170 };

function Tools_() {
  const { here, b } = useScene();
  return (
    <>
      <Eyebrow on={here}>tool calling</Eyebrow>

      {/* 0 · what is a tool */}
      <Statement on={here && b === 0} out={here && b > 0} y={190} size={104}>A tool is a typed<br />function a model can call.</Statement>
      {['name', 'description', 'parameters'].map((n, i) => (
        <NodeBox key={n} rect={{ x: 150 + i * 560, y: 600, w: 500, h: 130 }} on={here && b === 0} kind={`0${i + 1}`} value={n} delay={i * 150} />
      ))}

      {/* 1 · a real tool definition */}
      <Reveal on={here && b === 1} out={here && b > 1} x={150} y={170}>
        <Terminal prompt="" size={32} lines={TOOL_JSON.map((t, i) => (i === 2
          ? { t, marks: [{ text: 'Finds talks by track and start time.', label: 'the model reads this' }], labels: 1 }
          : t))} />
      </Reveal>

      {/* 2 · skill */}
      <Statement on={here && b === 2} out={here && b > 2} y={220} size={170}><G>skill</G> =</Statement>
      <Meta on={here && b === 2} out={here && b > 2} y={470} size={56}>a typed capability<br />an agent can invoke</Meta>
      <Meta on={here && b === 2} out={here && b > 2} y={760} size={24}>not Anthropic's Agent Skills · not Android Skills (we meet those later)</Meta>

      {/* 3 · MCP */}
      <NodeBox rect={CLIENT} on={here && b === 3} kind="MCP client" value="the agent" tone="normal" />
      <NodeBox rect={SERVER} on={here && b === 3} kind="MCP server" value="your tools" tone="hot" />
      <Arrow from={{ x: CLIENT.x + CLIENT.w, y: 470 }} to={{ x: SERVER.x, y: 470 }} on={here && b === 3} label="tools/list" ly={-18} tone="hot" />
      <Arrow from={{ x: CLIENT.x + CLIENT.w, y: 545 }} to={{ x: SERVER.x, y: 545 }} on={here && b === 3} label="tools/call" ly={42} tone="hot" delay={250} />
      <Meta on={here && b === 3} y={800} size={34}>An open protocol: <A>discover</A> tools, <A>call</A> tools.</Meta>

      {/* 4 · N × M */}
      <Reveal on={here && b === 4} x={150} y={240}>
        <div className="t-numeral" style={{ fontSize: 260, color: 'var(--ink-3)' }}>N × M</div>
        <div className="t-meta" style={{ fontSize: 28, marginTop: 40 }}>one connector per pair</div>
      </Reveal>
      <Reveal on={here && b === 4} x={1000} y={240} delay={300}>
        <div className="t-numeral" style={{ fontSize: 260, color: 'var(--accent)' }}>N + M</div>
        <div className="t-meta" style={{ fontSize: 28, marginTop: 40 }}>one contract</div>
      </Reveal>

      {/* 5 · on device */}
      <Statement on={here && b === 5} y={220} size={104}>Remote servers need<br />network and auth.</Statement>
      <Statement on={here && b === 5} y={520} size={104} delay={300}>Your data is <G>on the phone.</G></Statement>
    </>
  );
}

/** 05 TOOLS — tool anatomy, the word "skill", MCP, N×M. */
export const Tools = () => <Scene index={4}><Tools_ /></Scene>;
