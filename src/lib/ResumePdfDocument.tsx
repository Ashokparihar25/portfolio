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
    paddingTop: 26,
    paddingBottom: 26,
    paddingHorizontal: 32,
    fontFamily: "Helvetica",
    fontSize: 8.4,
    color: "#000000",
    lineHeight: 1.28,
  },
  headerName: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    marginBottom: 3,
  },
  headerContact: {
    fontSize: 8.2,
    textAlign: "center",
    marginBottom: 8,
  },
  link: { color: "#1155CC", textDecoration: "none" },
  sectionTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    marginTop: 6,
    marginBottom: 3,
    textTransform: "uppercase",
  },
  summary: {
    fontSize: 8.4,
    textAlign: "justify",
    marginBottom: 1,
  },
  competencyGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 1,
  },
  competencyItem: {
    width: "50%",
    flexDirection: "row",
    marginBottom: 1,
    paddingRight: 6,
  },
  competencyBullet: { width: 9, fontSize: 8.4 },
  competencyText: { flex: 1, fontSize: 8.4 },
  stackRow: {
    flexDirection: "row",
    marginBottom: 1.5,
    alignItems: "flex-start",
  },
  stackLabel: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8.4,
    width: 84,
    paddingRight: 4,
  },
  stackItems: {
    flex: 1,
    fontSize: 8.4,
  },
  certLine: {
    fontSize: 8.4,
    marginBottom: 1.5,
  },
  certTitle: { fontFamily: "Helvetica-Bold" },
  expBlock: { marginBottom: 4 },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 3,
    marginBottom: 1,
  },
  expTitle: {
    flex: 1,
    fontFamily: "Helvetica-Bold",
    fontSize: 8.4,
    paddingRight: 8,
  },
  expClient: {
    fontSize: 8.2,
    fontStyle: "italic",
    marginBottom: 1,
  },
  expDates: {
    fontSize: 8.4,
    textAlign: "right",
    minWidth: 106,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 1.2,
    paddingLeft: 2,
  },
  bulletMark: { width: 9, fontSize: 8.4 },
  bulletText: {
    flex: 1,
    fontSize: 8.4,
    textAlign: "justify",
    lineHeight: 1.28,
  },
  projectName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8.4,
    marginTop: 3,
    marginBottom: 1,
  },
  projectTools: {
    fontSize: 8.4,
    marginBottom: 1.5,
  },
  projectToolsLabel: { fontFamily: "Helvetica-Bold" },
  eduLine: {
    fontSize: 8.4,
    marginBottom: 1.5,
  },
  achievementBlock: {
    marginBottom: 2,
  },
  achievementTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8.4,
  },
  achievementDesc: {
    fontSize: 8.4,
    textAlign: "justify",
    lineHeight: 1.28,
  },
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
          </Link>
          {" | "}
          <Link src={contact.portfolioUrl} style={styles.link}>
            <Text>Portfolio</Text>
          </Link>
          {" | "}
          <Link src={contact.github} style={styles.link}>
            <Text>GitHub</Text>
          </Link>
        </Text>

        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.summary}>{resume.summary}</Text>

        <Text style={styles.sectionTitle}>Core Competencies</Text>
        <View style={styles.competencyGrid}>
          {resume.coreCompetencies.map((item) => (
            <View key={item} style={styles.competencyItem}>
              <Text style={styles.competencyBullet}>{BULLET}</Text>
              <Text style={styles.competencyText}>{item}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Technical Stack</Text>
        {resume.technicalStack.map((row) => (
          <View key={row.label} style={styles.stackRow}>
            <Text style={styles.stackLabel}>{row.label}:</Text>
            <Text style={styles.stackItems}>{row.items}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {resume.experience.map((exp) => (
          <View key={`${exp.company}-${exp.period}`} style={styles.expBlock}>
            <View style={styles.expHeader}>
              <Text style={styles.expTitle}>
                {exp.role} | {exp.company} | {exp.location}
              </Text>
              <Text style={styles.expDates}>{exp.period}</Text>
            </View>
            {exp.client ? (
              <Text style={styles.expClient}>{exp.client}</Text>
            ) : null}
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

        <Text style={styles.sectionTitle}>Certifications</Text>
        {resume.certifications.map((c) => (
          <Text key={c.title} style={styles.certLine}>
            <Text style={styles.certTitle}>{c.title}</Text>
            {" — "}
            {c.org}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Achievements</Text>
        {resume.achievements.map((item) => (
          <View key={item.title} style={styles.achievementBlock}>
            <Text style={styles.achievementDesc}>
              <Text style={styles.achievementTitle}>{item.title}: </Text>
              {item.desc}
            </Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}
