"use client"

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChironisMark, ChironisWordmark } from "@/components/chironis-logo"
import { Screenshot } from "@/components/screenshot"

const gaps = [
  {
    title: "The work isn’t written down",
    text: "Workshops hear from a dozen people. Hundreds do the work, and the quiet processes never make it into the room.",
  },
  {
    title: "The numbers are asserted",
    text: "Business cases rest on estimates nobody can trace back to who said what, or how sure anyone was.",
  },
  {
    title: "Built isn’t delivered",
    text: "An agent goes live and nobody counts what it gave back, or what happens when it gets something wrong.",
  },
]

const stages = [
  {
    title: "Listen",
    line: "Every team, analysed in parallel.",
    text: "AI interviews, workshop recordings and a staff survey feed one evidence base.",
  },
  {
    title: "Size",
    line: "Every number shows its working.",
    text: "Hours, FTE and value worked out the same way every time, and every figure graded.",
  },
  {
    title: "Assess",
    line: "What AI can do here, and what if it’s wrong.",
    text: "Each task matched to the kind of AI work it needs, then given an error-risk band.",
  },
  {
    title: "Build",
    line: "Agents earn their autonomy.",
    text: "A signed agent card, a test set and a go-live bar before anything runs alone.",
  },
  {
    title: "Prove",
    line: "Every case is counted.",
    text: "A signed baseline, a record of every case and a statement every quarter.",
  },
]

const listening = [
  {
    title: "Your recordings",
    text: "Upload Teams or Zoom workshops. Chironis transcribes them, reads the screens and drafts the process map.",
    live: true,
  },
  {
    title: "AI interviews",
    text: "Fifteen to thirty minutes by voice, from a link. People share their screen or drop in documents; there’s no interviewer to schedule.",
    live: true,
  },
  {
    title: "Work capture",
    text: "A desktop recorder sees how the work is really done and uploads to your own storage. The person reviews it first. No audio, keystrokes or video.",
    live: false,
  },
]

const mapSteps = [
  { k: "Heard", text: "Recordings, interviews and captures, every word kept with who said it." },
  { k: "Drafted", text: "A process map with every step linked to the moment it was described." },
  { k: "Approved", text: "The process owner signs it off. Nothing counts until they do." },
  { k: "Written up", text: "An SOP in Word or PDF, read straight off the approved map." },
]

const arithmetic = [
  "hours   = transactions × minutes ÷ 60",
  "FTE     = hours ÷ productive hours",
  "value   = FTE × % automatable × loaded cost",
  "payback = build cost ÷ monthly value",
]

const grades = [
  ["Observed", "±10%"],
  ["Sampled", "±25%"],
  ["Surveyed", "±25%"],
  ["Estimated", "±30–50%"],
  ["Asserted", "Shown, never counted"],
]

const riskBands = [
  ["Low", "Runs on its own", "5%"],
  ["Medium", "A person approves flagged cases", "2%"],
  ["High", "A person approves each case", "1%"],
  ["Critical", "Drafts only", "None"],
]

const buildSteps = [
  { title: "Request", text: "“What do you need done?” Raised by your team, triaged by the engineer." },
  { title: "Agent card", text: "Drafted from the assessment and signed by you." },
  { title: "Test set", text: "Run in Chironis, or wherever the agent is built." },
  { title: "Go-live bar", text: "Errors under the band’s limit, proved on 150 clean cases." },
  { title: "Live", text: "Monitored, and every incident becomes a new test." },
]

const ladder = [
  { label: "Drafts only", className: "h-14 bg-primary-100 text-primary-900" },
  { label: "A person approves each case", className: "h-20 bg-primary-200 text-primary-900" },
  { label: "A person approves flagged cases", className: "h-24 bg-primary-400 text-primary-900" },
  { label: "Runs on its own", className: "h-28 bg-primary-700 text-white" },
]

const proof = [
  { title: "A baseline first", text: "Measured before anything changes, so the comparison is fair." },
  {
    title: "One event per case",
    text: "Each automation reports every case into a hash-chained, append-only record. Your IT lead holds the keys.",
  },
  { title: "Six conditions", text: "A case counts as verified benefit only when all six hold." },
  { title: "A statement every quarter", text: "Line by line, open to dispute, capped as agreed." },
]

const boardPack = [
  "Findings report (PDF)",
  "Deck (PowerPoint)",
  "Workbook with live formulas",
  "Process maps (BPMN)",
  "SOPs (Word, PDF)",
  "Benefit statements",
]

const trust = [
  { title: "Hosted in the UK", text: "AWS London. Every client in its own walled workspace." },
  { title: "Locked at the database", text: "Row-level security on every client table, tested on every build." },
  {
    title: "Your recordings, your storage",
    text: "The desktop recorder uploads straight to your own AWS or Azure account.",
  },
  { title: "Salaries never reach an AI", text: "Pay is encrypted, seen by Finance only and valued by role band." },
  {
    title: "AI proposes, people decide",
    text: "Assistants only suggest changes; a person applies them. Every action lands in an append-only audit log.",
  },
  {
    title: "Capture with care",
    text: "No audio, keystrokes or video. Field names, never their values. Never used to manage performance.",
  },
]

const phases = [
  {
    kicker: "Assess · 4 weeks, fixed fee",
    title: "Find where AI pays",
    text: "One forward-deployed engineer runs the roadmap assessment on Chironis.",
    get: "Sized, graded candidates, a 100-day plan and a costed proposal.",
    decide: "What to build first, if anything.",
  },
  {
    kicker: "Build · 6 weeks to 6 months",
    title: "Ship what clears the bar",
    text: "An engineer per area of the business, with developers and AI evaluation engineers behind them.",
    get: "Agents through the go-live bar, and the evidence they cleared it.",
    decide: "Every step up in autonomy.",
  },
  {
    kicker: "Run · ongoing",
    title: "Keep the benefit honest",
    text: "Your engineer stays two or three days a week; Chironis counts every case.",
    get: "A benefit statement every quarter.",
    decide: "What comes next on the roadmap.",
  },
]

function Heading({
  stage,
  title,
  dark,
  className,
}: {
  stage?: string
  title: string
  dark?: boolean
  className?: string
}) {
  return (
    <h2
      className={`text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-gray-900"} ${className ?? ""}`}
    >
      {stage && <span className={dark ? "text-primary-400" : "text-primary"}>{stage}. </span>}
      {title}
    </h2>
  )
}

export default function ChironisPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-background dot-grid py-20 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <ChironisWordmark markSize={34} className="text-[24px]" />
              <h1 className="mt-8 text-4xl font-extrabold tracking-[-0.03em] text-gray-900 sm:text-6xl">
                AI automation analysts, at scale.
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Chironis does the heavy lifting of process analysis across your whole organisation: it
                runs the interviews, drafts every process map, sizes where AI pays with graded evidence
                and counts what each automation gives back. Our engineer brings the judgement, starting
                with a four-week, fixed-fee roadmap assessment.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2">
                    Book the roadmap assessment <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button variant="outline" size="lg">
                    See how it works
                  </Button>
                </Link>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
                {["Hosted on AWS in London", "Every figure graded", "Salaries never reach an AI"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Screenshot
                src="/assets/images/chironis/dashboard.webp"
                alt="Chironis client dashboard showing engagement stage, candidates assessed, capacity and benefit tracked"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* The situation */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading
            title="AI programmes stall for want of context"
            className="mx-auto max-w-2xl text-center"
          />
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {gaps.map((gap, index) => (
              <div key={gap.title}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{gap.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{gap.text}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-gray-700">
            Chironis closes all three gaps: an engineer who stays with your teams, and a platform that keeps
            the evidence.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-24 py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Heading title="One loop, five stages" />
            <p className="mt-4 text-lg text-muted-foreground">
              Listen, size, assess, build and prove in one place, so the evidence, the business case and
              the benefit record never disagree.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((stage, index) => (
              <div key={stage.title}>
                <Card className="h-full">
                  <CardHeader>
                    <span className="text-sm font-semibold tabular-nums text-primary">{String(index + 1).padStart(2, "0")}</span>
                    <CardTitle className="text-xl">{stage.title}</CardTitle>
                    <p className="pt-1 font-medium text-gray-900">{stage.line}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{stage.text}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-lg text-gray-700">
            Your engineer judges. <strong className="text-gray-900">Chironis does the heavy lifting.</strong>{" "}
            You keep everything.
          </p>
        </div>
      </section>

      {/* 01 Listen */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <Heading stage="Listen" title="Three levels of listening" />
              <div className="mt-8 space-y-4">
                {listening.map((level, index) => (
                  <div key={level.title} className="rounded-lg border bg-white p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="micro-label text-primary">Level {index + 1}</p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">{level.title}</p>
                      </div>
                      <span
                        className={`micro-label rounded-full px-3 py-1 text-[11px] ${
                          level.live ? "bg-primary-50 text-primary-800" : "bg-amber-50 text-amber-800"
                        }`}
                      >
                        {level.live ? "Live" : "In pilot"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{level.text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-gray-700">
                And a short survey for everyone, broken down only for groups of five or more.
              </p>
            </div>
            <div>
              <Screenshot
                src="/assets/images/chironis/map-from-interview.webp"
                alt="A BPMN process map in Chironis, generated from a workshop recording and waiting for review"
              />
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              From what people said to an approved map
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {mapSteps.map((step, index) => (
                <div
                  key={step.k}
                  className={`rounded-lg border p-5 ${index === mapSteps.length - 1 ? "border-0 bg-ink text-white" : "bg-white"}`}
                >
                  <p className={`micro-label ${index === mapSteps.length - 1 ? "text-primary-400" : "text-primary"}`}>
                    {String(index + 1).padStart(2, "0")} · {step.k}
                  </p>
                  <p className={`mt-2 ${index === mapSteps.length - 1 ? "text-slate-300" : "text-gray-600"}`}>{step.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-background p-5">
                <p className="font-semibold text-gray-900">Open standards</p>
                <p className="mt-1 text-gray-600">Maps export as BPMN 2.0 and open in Camunda or Signavio.</p>
              </div>
              <div className="rounded-lg border bg-background p-5">
                <p className="font-semibold text-gray-900">Duplication found</p>
                <p className="mt-1 text-gray-600">Five detectors flag the same work being done twice across teams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Size */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading stage="Size" title="Every number shows its working" />
          <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <div className="rounded-lg bg-ink p-8 text-white">
              <p className="micro-label text-primary-400">The arithmetic</p>
              <pre className="mt-5 overflow-x-auto font-mono-label text-sm leading-8 text-slate-100">
                {arithmetic.join("\n")}
              </pre>
              <p className="mt-5 text-sm text-slate-400">
                Pay is valued by role band, never by person, and salaries never reach an AI.
              </p>
            </div>
            <div>
              <p className="micro-label mb-3 text-primary">Every figure carries a grade</p>
              <div className="overflow-hidden rounded-lg border bg-white">
                <table className="w-full text-left">
                  <thead className="bg-[#F1F5F4] text-sm text-gray-900">
                    <tr>
                      <th scope="col" className="px-5 py-3 font-semibold">Grade</th>
                      <th scope="col" className="px-5 py-3 font-semibold">Confidence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-gray-700">
                    {grades.map(([grade, confidence]) => (
                      <tr key={grade}>
                        <td className="px-5 py-3">{grade}</td>
                        <td className="px-5 py-3">{confidence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-700">
                Three kinds of value, <strong className="text-gray-900">time freed, cash and wider value</strong>,
                are never added together.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-primary-700 p-8 text-white sm:p-10">
            <p className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Capacity is never reported as cash.</p>
            <p className="mt-4 max-w-3xl text-primary-50">
              Time freed becomes cash only when it is redeployed or a role isn’t refilled. Until then it is
              shown as capacity, with its grade beside it, and nobody’s board pack says otherwise.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <Screenshot
              src="/assets/images/chironis/opportunities.webp"
              alt="Chironis opportunities view ranking automation candidates by FTE returned, value, build days and payback"
            />
          </div>
        </div>
      </section>

      {/* 03 Assess */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading stage="Assess" title="What AI can do here, and if it’s wrong" />
          <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="text-6xl font-extrabold tracking-tight text-primary">24</p>
              <p className="mt-2 text-lg text-gray-900">
                kinds of AI work in seven families, each rated for OpenAI, Claude and Gemini.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Default error rates are marked Estimated until your own tests replace them.
              </p>

              <p className="micro-label mt-10 mb-3 text-primary">Error risk sets the ceiling</p>
              <div className="overflow-x-auto rounded-lg border bg-white">
                <table className="w-full text-left">
                  <thead className="bg-[#F1F5F4] text-sm text-gray-900">
                    <tr>
                      <th scope="col" className="px-5 py-3 font-semibold">Risk band</th>
                      <th scope="col" className="px-5 py-3 font-semibold">Most autonomy allowed</th>
                      <th scope="col" className="px-5 py-3 font-semibold">Error limit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-gray-700">
                    {riskBands.map(([band, autonomy, limit]) => (
                      <tr key={band}>
                        <td className="px-5 py-3">{band}</td>
                        <td className="px-5 py-3">{autonomy}</td>
                        <td className="px-5 py-3">{limit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                A decision about a person is never rated below High. The expected cost of errors sits beside
                the benefit, never subtracted from it.
              </p>
            </div>
            <div>
              <Screenshot
                src="/assets/images/chironis/assessment.webp"
                alt="A Chironis assessment suggesting automation for a claims process, with route, complexity, build days and rationale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 04 Build */}
      <section className="relative bg-ink dot-grid-dark py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading stage="Build" title="Agents earn their autonomy" dark />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {buildSteps.map((step, index) => (
              <div
                key={step.title}
                className={`rounded-lg border p-5 ${
                  index === buildSteps.length - 1
                    ? "border-primary-400/40 bg-primary-900/40"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <p className="font-semibold text-white">{step.title}</p>
                <p className="mt-2 text-sm text-slate-400">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 items-end gap-3 lg:grid-cols-4">
            {ladder.map((rung) => (
              <div key={rung.label} className={`flex items-end rounded-lg p-4 text-sm font-semibold ${rung.className}`}>
                {rung.label}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-slate-300">
            Up a rung only on clean live cases and your approval. Down automatically when errors rise, or
            when the model, prompt or tools change.
          </p>
          <p className="mt-4 max-w-xl text-slate-400">
            Agents can be built anywhere (Claude Agent SDK, OpenAI Agents SDK, Google ADK, Power Automate,
            n8n) and report every case to Chironis.
          </p>
        </div>
      </section>

      {/* 05 Prove */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading stage="Prove" title="Built isn’t delivered. Every case is counted." />
          <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-[3fr_2fr]">
            <ol className="space-y-6">
              {proof.map((item, index) => (
                <li
                  key={item.title}
                  className="flex gap-5"
                >
                  <span className="pt-0.5 text-sm font-semibold tabular-nums text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-1 text-gray-600">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="rounded-lg bg-ink p-8">
              <p className="micro-label text-primary-400">The board pack</p>
              <ul className="mt-5 space-y-3">
                {boardPack.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-200">
                    <Check className="h-4 w-4 flex-shrink-0 text-primary-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate-400">
                Everything comes out of the same record, so the deck, the workbook and the business case
                never disagree.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading title="Built to be trusted with how you work" />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trust.map((item, index) => (
              <div key={item.title}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.text}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg border bg-white p-6 sm:p-8">
            <p className="micro-label text-primary">Built on AWS</p>
            <p className="mt-3 max-w-[36rem] text-gray-700">
              Chironis runs in AWS London (eu-west-2) on ECS Fargate, RDS for PostgreSQL, S3, KMS, WAF, SES
              and CloudTrail, provisioned with Terraform. Each client’s data is isolated in the database
              itself, and the database and files are encrypted with keys held in KMS.
            </p>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            On the way: single sign-on, UK-only AI processing, SOC 2 and ISO 27001.
          </p>
        </div>
      </section>

      {/* The engagement */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading title="Assess, build, run: you decide at every gate" />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {phases.map((phase, index) => {
              const dark = index === phases.length - 1
              return (
                <div key={phase.title}>
                  <Card className={`h-full ${dark ? "border-0 bg-ink text-white" : ""}`}>
                    <CardHeader>
                      <p className={`micro-label ${dark ? "text-primary-400" : "text-primary"}`}>
                        {phase.kicker}
                      </p>
                      <CardTitle className={`pt-1 text-2xl ${dark ? "text-white" : ""}`}>{phase.title}</CardTitle>
                      <p className={`pt-1 ${dark ? "text-slate-300" : "text-gray-600"}`}>{phase.text}</p>
                    </CardHeader>
                    <CardContent className={`space-y-4 border-t pt-5 ${dark ? "border-white/10" : ""}`}>
                      <div>
                        <p className={`micro-label ${dark ? "text-slate-400" : "text-muted-foreground"}`}>You get</p>
                        <p className={`mt-1 ${dark ? "text-white" : "text-gray-900"}`}>{phase.get}</p>
                      </div>
                      <div>
                        <p className={`micro-label ${dark ? "text-slate-400" : "text-muted-foreground"}`}>You decide</p>
                        <p className={`mt-1 ${dark ? "text-white" : "text-gray-900"}`}>{phase.decide}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-primary-900 dot-grid-dark py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <ChironisWordmark markSize={34} className="text-[24px] text-white" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Start with four weeks. Then decide what to build.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              A fixed-fee roadmap assessment, run on Chironis by one forward-deployed engineer. You keep the
              evidence, the sized roadmap and a costed plan, whatever you decide next.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="gap-2">
                  <ChironisMark size={18} />
                  Book the roadmap assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
