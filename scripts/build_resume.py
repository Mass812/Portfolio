"""Generate Matt Wellman's resume PDF from the portfolio site's content.

Design mirrors the site's language in print form: uppercase tracked eyebrows,
hairline rules, gold + teal accents on white.
"""
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer,
    HRFlowable, Table, TableStyle, KeepTogether,
)

OUT = "/Users/mwellman/Documents/repos/Portfolio/public/MattWellman-Resume.pdf"

GOLD = HexColor("#8a6a14")
GOLD_LIGHT = HexColor("#c9a227")
TEAL = HexColor("#0e7f8b")
INK = HexColor("#1d1d1f")
MUTED = HexColor("#5c5c5e")
FAINT = HexColor("#9a9a9c")
RULE = HexColor("#d9cfae")

def st(name, **kw):
    base = dict(fontName="Helvetica", fontSize=9.2, leading=13.6,
                textColor=INK, alignment=TA_LEFT, spaceAfter=0, spaceBefore=0)
    base.update(kw)
    return ParagraphStyle(name, **base)

S = {
    "name":    st("name", fontName="Helvetica-Bold", fontSize=21, leading=24,
                  textColor=INK, spaceAfter=2),
    "role":    st("role", fontSize=10.2, leading=13, textColor=GOLD,
                  spaceAfter=3),
    "contact": st("contact", fontSize=8.4, leading=12, textColor=MUTED),
    "eyebrow": st("eyebrow", fontName="Helvetica-Bold", fontSize=8.2,
                  leading=11, textColor=GOLD, spaceBefore=13, spaceAfter=2),
    "body":    st("body", textColor=INK),
    "summary": st("summary", fontSize=9.4, leading=14.4, textColor=INK),
    "job":     st("job", fontName="Helvetica-Bold", fontSize=10.6, leading=14,
                  textColor=INK, spaceBefore=9),
    "jobmeta": st("jobmeta", fontSize=8.2, leading=11.5, textColor=FAINT,
                  spaceAfter=3),
    "bullet":  st("bullet", fontSize=9.1, leading=13.2, leftIndent=10,
                  bulletIndent=0, spaceAfter=2.5),
    "small":   st("small", fontSize=8.6, leading=12.6, textColor=MUTED),
}

def eyebrow(text):
    return [
        Paragraph(f'<font size="8.2">{"&nbsp;".join(c for c in text.upper())}</font>', S["eyebrow"]),
        HRFlowable(width="100%", thickness=0.7, color=RULE, spaceBefore=2, spaceAfter=6),
    ]

def bullet(text):
    return Paragraph(text, S["bullet"], bulletText="–")

def job(title, meta):
    return [Paragraph(title, S["job"]), Paragraph(meta, S["jobmeta"])]

story = []

# ---------- header ----------
story.append(Paragraph("Matt Wellman", S["name"]))
story.append(Paragraph("SENIOR SOFTWARE ENGINEER &nbsp;&middot;&nbsp; FABLETICS", S["role"]))
story.append(Paragraph(
    "mattwellman.info &nbsp;&middot;&nbsp; (502) 331-1825 &nbsp;&middot;&nbsp; "
    "williamwellman98@gmail.com &nbsp;&middot;&nbsp; linkedin.com/in/matt-wellman-154301a3 "
    "&nbsp;&middot;&nbsp; github.com/Mass812 &nbsp;&middot;&nbsp; Louisville, KY (Remote)",
    S["contact"]))
story.append(Spacer(1, 4))
story.append(HRFlowable(width="100%", thickness=1.1, color=GOLD_LIGHT, spaceBefore=2, spaceAfter=0))

# ---------- summary ----------
story += eyebrow("Profile")
story.append(Paragraph(
    "Self-taught engineer with a science background. My strength is system design and "
    "infrastructure — real-time event platforms, inventory systems, and the developer tooling "
    "that makes the hard work easier for everyone else. I support omni retail systems across "
    "134 Fabletics stores in the US, 10 across the EU, and 15 Savage X Fenty stores, and built "
    "and long ran the Fabletics FIT app for iOS and Android.", S["summary"]))

# ---------- recognition ----------
story += eyebrow("Recognition")
rec_rows = [
    [Paragraph("<b>Global MVP Recognition Award</b> — individual, company-wide", S["body"]),
     Paragraph("June 2022", S["small"])],
    [Paragraph("<b>All Star Team Award</b> — RFID Project Team, by nomination: “one of the "
               "fastest and most effective technology rollouts in our industry”", S["body"]),
     Paragraph("Early 2026", S["small"])],
    [Paragraph("<b>Inaugural Masters of Innovation</b> — industry award to Fabletics (Let’s Talk "
               "Supply Chain &amp; SupplyChainBrain, at Manifest) for the retail-inventory programme I led the "
               "core architecture and integration on", S["body"]),
     Paragraph("2026", S["small"])],
]
rec = Table(rec_rows, colWidths=[5.45 * inch, 1.25 * inch])
rec.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("ALIGN", (1, 0), (1, -1), "RIGHT"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (0, -1), 14),
    ("RIGHTPADDING", (1, 0), (1, -1), 0),
    ("TOPPADDING", (0, 0), (-1, -1), 2),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
]))
story.append(rec)

# ---------- experience ----------
story += eyebrow("Experience")

story += job("Fabletics — Retail Backend",
             "October 2022 – Present &nbsp;&middot;&nbsp; Senior Software Engineer (Oct 2024– ) "
             "&nbsp;&middot;&nbsp; Software Engineer II (Aug–Oct 2024) &nbsp;&middot;&nbsp; "
             "Omni / Retail Software Engineer (Oct 2022–Aug 2024)")
for b in [
    "Led the core architecture and integration of <b>RFID</b> into the existing retail inventory "
    "stack. Full store rollout in six months, on time and within budget — replacing twice-yearly "
    "physical counts with inventory ownership visibility every 30 minutes, writing to production "
    "inventory across all 159 stores.",
    "Built the <b>Kafka event framework</b> behind the platform: explicit POS, movement, sold and "
    "adjustment events spanning the Fabletics and Savage X Fenty brands — multi-brand topic "
    "design, consumer-group management, and a per-store canary rollout. Instrumented monitors "
    "and alerts before launch.",
    "Consolidated 15+ divergent inventory-movement code paths into one consistent pattern and "
    "fixed a transfer defect that silently duplicated manufacturer-direct inventory.",
    "Built the <b>BOPIS and receiving reconciliation</b> systems — the receiving job from the "
    "ground up, stored procedures through NestJS service and endpoint — keeping inventory "
    "accounting honest against physical movement.",
    "Restructured the retail backend into a modular <b>NestJS monorepo</b> serving Fabletics, "
    "Savage X Fenty, JustFab, ShoeDazzle and Yitty — canary and stable GitHub Actions pipelines, "
    "Jest and TSC gates, single-command scaffolding. Led the Amazon Today backend integration "
    "on that framework.",
    "Migrated legacy CRON workstreams into the monorepo, packaged Smarty address validation as "
    "a shared NestJS library, and wired the BOPIS order lifecycle (cancel, auto-cancel, "
    "movement blocking).",
    "Added nightly Postman/Newman API regression to CI with on-demand environments; shipped "
    "seven improvements to an internal Electron/React API client and an AI-assisted delivery "
    "routine; delivered the SMS platform full-stack.",
]:
    story.append(bullet(b))

story += job("Fabletics — FIT Mobile App",
             "March 2021 – Present &nbsp;&middot;&nbsp; Primary Software Engineer (Oct 2021– ) "
             "&nbsp;&middot;&nbsp; Software Engineer, Jr. (Mar–Oct 2021)")
for b in [
    "Built a member-exclusive fitness app for iOS and Android and served as its sole full-stack "
    "developer for most of its life — React Native and TypeScript over DynamoDB, Strapi, "
    "Postgres, Terraform and GraphQL; every feature from creation through app-store deployment.",
    "4.8★ on iOS (5,475+ reviews) and 4.6★ on Android; 548k lifetime downloads; live in 12 "
    "countries with content in Spanish, French and German — 900+ video classes, 40+ programs, "
    "100+ meditations.",
    "Shipped the EU launch, app-wide pagination, favorites, shoppable outfits, content filters "
    "and internationalization; redesigned DynamoDB access patterns (sparse GSIs, projection "
    "expressions), moved filtering server-side, integrated Branch deep-linking and Emarsys "
    "across five world regions.",
]:
    story.append(bullet(b))

story += job("Freelance — React &amp; React Native Developer",
             "September 2020 – March 2021")
story.append(bullet(
    "Built client web applications in React with backends on Firebase and MERN — from marketing "
    "sites to internal business tooling, scoped and delivered directly with clients."))

story += job("UPS Worldport — Safety Committee",
             "June 2019 – August 2020")
story.append(bullet(
    "Built a safety-auditing web platform (React, Firebase) replacing triplicate paperwork; "
    "approved by building managers and the Safety Committee Chairman and run in production; "
    "handed the codebase to UPS on departure."))

story += job("Parse IO — React Native Developer",
             "March 2018 – September 2019")
story.append(bullet(
    "Client React Native applications for iOS and Android — from internationalizing existing "
    "apps with i18n to building video-streaming apps from scratch, on a remote scrum team."))

story += job("Techstyle Fashion Group — Director of Security Operations",
             "February 2012 – October 2018")
story.append(bullet(
    "Led multi-site security operations; automated work-order intake, device tracking and "
    "trailer logging with self-built web tooling that cut manual workload and increased "
    "operational oversight — the work that led me into engineering."))

# ---------- skills ----------
story += eyebrow("Skills")
skills_rows = [
    ("Languages &amp; Frameworks", "TypeScript, JavaScript (ES6+), React, React Native, Node.js, NestJS, Express"),
    ("Messaging &amp; Events", "Apache Kafka (multi-brand topics, consumer groups), RabbitMQ, event-driven architecture"),
    ("Data", "Postgres (incl. stored procedures), DynamoDB, MongoDB, GraphQL, Apollo Server, Firebase"),
    ("CI/CD &amp; Observability", "GitHub Actions (canary &amp; stable), Postman/Newman regression, Jest, service monitoring &amp; alerting"),
    ("Platform", "AWS, Terraform, iOS &amp; Android deployment, AppCenter/CodePush, Jenkins"),
]
sk = Table(
    [[Paragraph(f"<b>{k}</b>", S["small"]), Paragraph(v, S["body"])] for k, v in skills_rows],
    colWidths=[1.7 * inch, 5.0 * inch])
sk.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 6),
    ("TOPPADDING", (0, 0), (-1, -1), 2),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
]))
story.append(sk)

# ---------- education ----------
story += eyebrow("Education")
story.append(Paragraph(
    "University of Kentucky — Chemistry &amp; Biology (2005–2007) &nbsp;&middot;&nbsp; "
    "Indiana University — Biochemistry (2004–2005) &nbsp;&middot;&nbsp; "
    "Ivy Tech Community College (2003–2004)", S["small"]))

doc = BaseDocTemplate(OUT, pagesize=letter,
                      leftMargin=0.85 * inch, rightMargin=0.85 * inch,
                      topMargin=0.7 * inch, bottomMargin=0.65 * inch,
                      title="Matt Wellman — Senior Software Engineer",
                      author="Matt Wellman")
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
doc.addPageTemplates([PageTemplate(id="page", frames=[frame])])
doc.build(story)
print("wrote", OUT)
