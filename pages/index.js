import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home () {
  let lecturerSchedule
  const [studentSchedule, setStudentSchedule] = useState([])
  const [roomSchedule, setRoomSchedule] = useState([])
  const [code, setCode] = useState()
  const [subject, setSubject] = useState()
  const [major, setMajor] = useState()
  const [lecturer, setLecturer] = useState()
  const [section, setSection] = useState()
  const [room, setRoom] = useState()
  const [start, setStart] = useState()
  const [end, setEnd] = useState()

  const setSchedule = () => {
    const data = {
      code: code,
      subject: subject,
      major: major,
      room: room,
      section: section,
      start: start,
      end: end
    }
    lecturerSchedule = data
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Class Management</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Manage Class Schedule
        </h1>

        <form class='w-full max-w-sm'>
          <div class='md:flex md:items-center mb-6'>
            <div class='md:w-1/3'>
              <label class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for='inline-code'>
                Subject Code
              </label>
            </div>
            <div class='md:w-2/3'>
              <input
                class='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id='inline-subject' type='text' placeholder='รหัสวิชา'
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          </div>
          <div class='md:flex md:items-center mb-6'>
            <div class='md:w-1/3'>
              <label class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for='inline-subject'>
                Subject
              </label>
            </div>
            <div class='md:w-2/3'>
              <input
                onChange={(e) => setSubject(e.target.value)}
                class='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id='inline-subject' type='text' placeholder='ชื่อวิชา'
              />
            </div>
          </div>
          <div class='md:flex md:items-center mb-6'>
            <div class='md:w-1/3'>
              <label class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for='inline-section'>
                Section
              </label>
            </div>
            <div class='md:w-2/3'>
              <input
                onChange={(e) => setSection(e.target.value)}
                class='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id='inline-password' type='text' placeholder='Section'
              />
            </div>
          </div>
          <div class='md:flex md:items-center mb-6'>
            <div class='md:w-1/3'>
              <label class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for='inline-subject'>
                Capacity
              </label>
            </div>
            <div class='md:w-2/3'>
              <input
                onChange={(e) => setSubject(e.target.value)}
                class='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id='inline-subject' type='text' placeholder='ความจุ'
              />
            </div>
          </div>
          <div class='md:flex md:items-center mb-6'>
            <div class='md:w-1/3'>
              <label class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for='inline-password'>
                Student Group
              </label>
            </div>
            <div class='md:w-2/3'>
              <input
                onChange={(e) => setMajor(e.target.value)}
                class='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id='inline-password' type='text' placeholder='สาขา'
              />
            </div>
          </div>
          <div class='md:flex md:items-center mb-6'>
            <div class='md:w-1/3'>
              <label class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for='inline-lecturer'>
                Lecturer
              </label>
            </div>
            <div class='md:w-2/3'>
              <input
                onChange={(e) => setLecturer(e.target.value)}
                class='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id='inline-password' type='text' placeholder='อาจารย์ผู้สอน'
              />
            </div>
          </div>
          
          <div class='md:flex md:items-center mb-6'>
            <div class='md:w-1/3'>
              <label class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for='inline-room'>
                Classroom
              </label>
            </div>
            <div class='md:w-2/3'>
              <input
                onChange={(e) => setRoom(e.target.value)}
                class='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id='inline-password' type='text' placeholder='ห้องเรียน'
              />
            </div>
          </div>
          <div class='md:flex md:items-center mb-6'>
            <div class='md:w-1/3'>
              <label class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for='inline-start'>
                Days
              </label>
            </div>
            <div class='md:w-2/3'>
              <input
                onChange={(e) => setStart(e.target.value)}
                class='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id='inline-password' type='text' placeholder='วันที่เรียน'
              />
            </div>
          </div>
          <div class='md:flex md:items-center mb-6'>
            <div class='md:w-1/3'>
              <label class='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for='inline-room'>
                Times
              </label>
            </div>
            <div class='md:w-2/3'>
              <input
                onChange={(e) => setEnd(e.target.value)}
                class='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' id='inline-password' type='text' placeholder='เวลา'
              />
            </div>
          </div>
          <div class='md:flex md:items-center'>
            <div class='md:w-1/3' />
            <div class='md:w-2/3'>
              <button
                // onClick={setSchedule}
                class='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type='button'
              >
                Add
              </button>
            </div>
          </div>
        </form>
        {JSON.stringify(lecturerSchedule)}
        {/* <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </div>
  )
}
