/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
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
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson {
    onCreateLesson {
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson {
    onUpdateLesson {
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson {
    onDeleteLesson {
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
export const onCreateLessonTeacher = /* GraphQL */ `
  subscription OnCreateLessonTeacher {
    onCreateLessonTeacher {
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
export const onUpdateLessonTeacher = /* GraphQL */ `
  subscription OnUpdateLessonTeacher {
    onUpdateLessonTeacher {
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
export const onDeleteLessonTeacher = /* GraphQL */ `
  subscription OnDeleteLessonTeacher {
    onDeleteLessonTeacher {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
      id
      name
      DOB
      flag
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
      id
      name
      DOB
      flag
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
      id
      name
      DOB
      flag
      createdAt
      updatedAt
    }
  }
`;
export const onCreateHomeroomTeacher = /* GraphQL */ `
  subscription OnCreateHomeroomTeacher {
    onCreateHomeroomTeacher {
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
export const onUpdateHomeroomTeacher = /* GraphQL */ `
  subscription OnUpdateHomeroomTeacher {
    onUpdateHomeroomTeacher {
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
export const onDeleteHomeroomTeacher = /* GraphQL */ `
  subscription OnDeleteHomeroomTeacher {
    onDeleteHomeroomTeacher {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateLessonStudent = /* GraphQL */ `
  subscription OnCreateLessonStudent {
    onCreateLessonStudent {
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
export const onUpdateLessonStudent = /* GraphQL */ `
  subscription OnUpdateLessonStudent {
    onUpdateLessonStudent {
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
export const onDeleteLessonStudent = /* GraphQL */ `
  subscription OnDeleteLessonStudent {
    onDeleteLessonStudent {
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
