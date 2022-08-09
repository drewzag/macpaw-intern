declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGAttributes<SVGElement>>
  const content: string
  export default content
}
