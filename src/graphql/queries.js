/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      Lessons {
        items {
          id
          lessonteacherID
          dName
          oName
          timetable
          credit
          NOL
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      Students {
        items {
          id
          name
          DOB
          grade
          course
          credits
          attendRate
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      name
      homeroomteacherID
      createdAt
      updatedAt
    }
  }
`;
export const listClasss = /* GraphQL */ `
  query ListClasss(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Lessons {
          nextToken
        }
        Students {
          nextToken
        }
        name
        homeroomteacherID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
      id
      lessonteacherID
      dName
      oName
      timetable
      credit
      NOL
      classID
      attend {
        studentId
        tim
      }
      Students {
        items {
          id
          lessonID
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lessonteacherID
        dName
        oName
        timetable
        credit
        NOL
        classID
        attend {
          studentId
          tim
        }
        Students {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLessonTeacher = /* GraphQL */ `
  query GetLessonTeacher($id: ID!) {
    getLessonTeacher(id: $id) {
      id
      Employee {
        id
        name
        DOB
        flag
        createdAt
        updatedAt
      }
      affiliation
      Lessons {
        items {
          id
          lessonteacherID
          dName
          oName
          timetable
          credit
          NOL
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLessonTeachers = /* GraphQL */ `
  query ListLessonTeachers(
    $filter: ModelLessonTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Employee {
          id
          name
          DOB
          flag
          createdAt
          updatedAt
        }
        affiliation
        Lessons {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      name
      DOB
      flag
      createdAt
      updatedAt
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        DOB
        flag
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHomeroomTeacher = /* GraphQL */ `
  query GetHomeroomTeacher($id: ID!) {
    getHomeroomTeacher(id: $id) {
      id
      Employee {
        id
        name
        DOB
        flag
        createdAt
        updatedAt
      }
      Classes {
        items {
          id
          name
          homeroomteacherID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listHomeroomTeachers = /* GraphQL */ `
  query ListHomeroomTeachers(
    $filter: ModelHomeroomTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomeroomTeachers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Employee {
          id
          name
          DOB
          flag
          createdAt
          updatedAt
        }
        Classes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      name
      DOB
      grade
      course
      credits
      attendRate
      classID
      lessons {
        items {
          id
          lessonID
          studentID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        DOB
        grade
        course
        credits
        attendRate
        classID
        lessons {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
