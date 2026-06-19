import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { contact, resume } from "@/data/portfolio";

const BULLET = "\u2022";

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 32,
    fontFamily: "Helvetica",
    fontSize: 8.6,
    color: "#000000",
    lineHeight: 1.3,
  },
  headerName: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    marginBottom: 4,
  },
  headerContact: {
    fontSize: 8.6,
    textAlign: "center",
    marginBottom: 10,
  },
  link: { color: "#000000", textDecoration: "none" },
  sectionTitle: {
    fontSize: 9.2,
    fontFamily: "Helvetica-Bold",
    marginTop: 7,
    marginBottom: 4,
    textTransform: "uppercase",
  },
  summary: {
    fontSize: 8.6,
    textAlign: "justify",
    marginBottom: 2,
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 2.5,
    alignItems: "flex-start",
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8.6,
    width: 155,
    paddingRight: 4,
  },
  skillItems: {
    flex: 1,
    fontSize: 8.6,
    textAlign: "justify",
  },
  certLine: {
    fontSize: 8.6,
    marginBottom: 2,
  },
  certTitle: { fontFamily: "Helvetica-Bold" },
  expBlock: { marginBottom: 5 },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 4,
    marginBottom: 2,
  },
  expTitle: {
    flex: 1,
    fontFamily: "Helvetica-Bold",
    fontSize: 8.6,
    paddingRight: 8,
  },
  expDates: {
    fontSize: 8.6,
    textAlign: "right",
    minWidth: 108,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 1.5,
    paddingLeft: 2,
  },
  bulletMark: { width: 10, fontSize: 8.6 },
  bulletText: {
    flex: 1,
    fontSize: 8.6,
    textAlign: "justify",
    lineHeight: 1.3,
  },
  projectName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8.6,
    marginTop: 4,
    marginBottom: 1,
  },
  projectTools: {
    fontSize: 8.6,
    marginBottom: 2,
  },
  projectToolsLabel: { fontFamily: "Helvetica-Bold" },
  eduLine: {
    fontSize: 8.6,
    marginBottom: 2,
  },
  achievement: {
    fontSize: 8.6,
    textAlign: "justify",
    lineHeight: 1.3,
  },
  achievementLabel: { fontFamily: "Helvetica-Bold" },
});

function Bullets({ items }: { items: string[] }) {
  return (
    <>
      {items.map((text, i) => (
        <View key={i} style={styles.bulletRow}>
          <Text style={styles.bulletMark}>{BULLET}</Text>
          <Text style={styles.bulletText}>{text}</Text>
        </View>
      ))}
    </>
  );
}

export function ResumePdfDocument() {
  return (
    <Document
      title={`${contact.name} — Data Analyst Resume`}
      author={contact.name}
      subject="Data Analyst Resume"
      creator={contact.name}
      producer={contact.name}
    >
      <Page size={resume.pageSize} style={styles.page}>
        <Text style={styles.headerName}>
          {contact.name} | {resume.title}
        </Text>
        <Text style={styles.headerContact}>
          {contact.location} | {contact.phone} | {contact.email} |{" "}
          <Link src={contact.linkedin} style={styles.link}>
            <Text>LinkedIn</Text>
          </Link>{" "}
          |{" "}
          <Link src={contact.portfolioUrl} style={styles.link}>
            <Text>Portfolio</Text>
          </Link>
        </Text>

        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.summary}>{resume.summary}</Text>

        <Text style={styles.sectionTitle}>Skills</Text>
        {resume.skillCategories.map((cat) => (
          <View key={cat.label} style={{ marginBottom: 3 }}>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 8.6, marginBottom: 1 }}>
              {cat.label}:
            </Text>
            <Text style={{ fontSize: 8.6, textAlign: "justify", lineHeight: 1.3 }}>{cat.items}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Certifications</Text>
        {resume.certifications.map((c) => (
          <Text key={c.title} style={styles.certLine}>
            <Text style={styles.certTitle}>{c.title}</Text>
            {" — "}
            {c.org}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Experience</Text>
        {resume.experience.map((exp) => (
          <View key={`${exp.company}-${exp.period}`} style={styles.expBlock}>
            <View style={styles.expHeader}>
              <Text style={styles.expTitle}>
                {exp.role} | {exp.company} | {exp.location}
              </Text>
              <Text style={styles.expDates}>{exp.period}</Text>
            </View>
            <Bullets items={exp.bullets} />
          </View>
        ))}

        <Text style={styles.sectionTitle}>Projects</Text>
        {resume.projectEntries.map((project) => (
          <View key={project.name}>
            <Text style={styles.projectName}>{project.name}</Text>
            <Text style={styles.projectTools}>
              <Text style={styles.projectToolsLabel}>Tools: </Text>
              {project.tools}
            </Text>
            <Bullets items={project.bullets} />
          </View>
        ))}

        <Text style={styles.sectionTitle}>Education</Text>
        {resume.educationLines.map((line) => (
          <Text key={line} style={styles.eduLine}>
            {line}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Achievement</Text>
        <Text style={styles.achievement}>
          <Text style={styles.achievementLabel}>{resume.achievement.title}: </Text>
          {resume.achievement.desc}
        </Text>
      </Page>
    </Document>
  );
}
