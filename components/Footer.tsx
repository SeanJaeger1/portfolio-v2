export default function Footer() {
  return (
    <div className="h-16 bg-[#333333] px-32 fixed bottom-0 w-[100vw] flex flex-row-reverse py-3">
      <GithubLogo />
    </div>
  )
}

function GithubLogo() {
  return (
    <a
      target="_blank"
      href="https://github.com/SeanJaeger1/portfolio-v2"
      rel="noopener noreferrer"
      className="h-10 w-10"
    >
      <img src="github-logo.svg" />
    </a>
  )
}
