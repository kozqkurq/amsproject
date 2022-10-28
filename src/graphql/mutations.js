/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
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
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
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
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
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
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
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
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
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
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
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
export const createLessonTeacher = /* GraphQL */ `
  mutation CreateLessonTeacher(
    $input: CreateLessonTeacherInput!
    $condition: ModelLessonTeacherConditionInput
  ) {
    createLessonTeacher(input: $input, condition: $condition) {
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
export const updateLessonTeacher = /* GraphQL */ `
  mutation UpdateLessonTeacher(
    $input: UpdateLessonTeacherInput!
    $condition: ModelLessonTeacherConditionInput
  ) {
    updateLessonTeacher(input: $input, condition: $condition) {
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
export const deleteLessonTeacher = /* GraphQL */ `
  mutation DeleteLessonTeacher(
    $input: DeleteLessonTeacherInput!
    $condition: ModelLessonTeacherConditionInput
  ) {
    deleteLessonTeacher(input: $input, condition: $condition) {
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      name
      DOB
      flag
      createdAt
      updatedAt
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      name
      DOB
      flag
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      name
      DOB
      flag
      createdAt
      updatedAt
    }
  }
`;
export const createHomeroomTeacher = /* GraphQL */ `
  mutation CreateHomeroomTeacher(
    $input: CreateHomeroomTeacherInput!
    $condition: ModelHomeroomTeacherConditionInput
  ) {
    createHomeroomTeacher(input: $input, condition: $condition) {
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
export const updateHomeroomTeacher = /* GraphQL */ `
  mutation UpdateHomeroomTeacher(
    $input: UpdateHomeroomTeacherInput!
    $condition: ModelHomeroomTeacherConditionInput
  ) {
    updateHomeroomTeacher(input: $input, condition: $condition) {
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
export const deleteHomeroomTeacher = /* GraphQL */ `
  mutation DeleteHomeroomTeacher(
    $input: DeleteHomeroomTeacherInput!
    $condition: ModelHomeroomTeacherConditionInput
  ) {
    deleteHomeroomTeacher(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createLessonStudent = /* GraphQL */ `
  mutation CreateLessonStudent(
    $input: CreateLessonStudentInput!
    $condition: ModelLessonStudentConditionInput
  ) {
    createLessonStudent(input: $input, condition: $condition) {
      id
      lessonID
      studentID
      lesson {
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
      student {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateLessonStudent = /* GraphQL */ `
  mutation UpdateLessonStudent(
    $input: UpdateLessonStudentInput!
    $condition: ModelLessonStudentConditionInput
  ) {
    updateLessonStudent(input: $input, condition: $condition) {
      id
      lessonID
      studentID
      lesson {
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
      student {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteLessonStudent = /* GraphQL */ `
  mutation DeleteLessonStudent(
    $input: DeleteLessonStudentInput!
    $condition: ModelLessonStudentConditionInput
  ) {
    deleteLessonStudent(input: $input, condition: $condition) {
      id
      lessonID
      studentID
      lesson {
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
      student {
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
      createdAt
      updatedAt
    }
  }
`;
