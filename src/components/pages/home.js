const Body = () => {
    return (
      <main class="flex h-screen items-center justify-center bg-cyan-600">
        <table class="w-6/12 overflow-hidden border-2 border-cyan-200 font-[Poppins] shadow-2xl">
          <thead class="text-white">
            <tr>
              <th class="bg-cyan-800 py-3">Title</th>
              <th class="bg-cyan-800 py-3">Subtitle</th>
              <th class="bg-cyan-800 py-3">ISBN</th>
              <th class="bg-cyan-800 py-3">Price</th>
              <th class="bg-cyan-800 py-3">Image</th>
              <th class="bg-cyan-800 py-3">URL</th>
            </tr>
          </thead>
          <tbody class="text-center text-cyan-900">
            <tr class="cursor-pointer bg-cyan-200 duration-300 hover:scale-105 hover:bg-cyan-100">
              <td class="py-3 px-6">Deno Succinctly</td>
              <td class="py-3 px-6"></td>
              <td class="py-3 px-6">9781642002140</td>
              <td class="py-3 px-6 text-left font-medium text-green-700">
                $19.99
              </td>
              <td >
                <img 
                  src="https://itbook.store/img/books/9781642002140.png"
                  alt="img"
                />
              </td>
              <td class="py-3 px-6">
                <a href="https://itbook.store/books/9781642002140">
                  https://itbook.store/books/9781642002140
                </a>
              </td>
            </tr>
            <tr class="cursor-pointer bg-cyan-300 duration-300 hover:scale-105 hover:bg-cyan-100">
              <td class="py-3 px-6">Robotics, AI, and Humanity</td>
              <td class="py-3 px-6">Science, Ethics, and Policy</td>
              <td class="py-3 px-6">9783030541729</td>
              <td class="py-3 px-6 text-left font-medium text-green-700">
                $59.99
              </td>
              <td>
                <img
                  src="https://itbook.store/img/books/9783030541729.png"
                  alt="img"
                />
              </td>
              <td class="py-3 px-6">
                <a href="https://itbook.store/books/9783030541729">
                  https://itbook.store/books/9783030541729
                </a>
              </td>
            </tr>
            <tr class="cursor-pointer bg-cyan-400 duration-300 hover:scale-105 hover:bg-cyan-100">
              <td class="py-3 px-6">
                Introduction to Autonomous Robots, 3rd Edition
              </td>
              <td class="py-3 px-6"></td>
              <td class="py-3 px-6">9781493773077</td>
              <td class="py-3 px-6 text-left font-medium text-green-700">
                $20.99
              </td>
              <td>
                <img
                  src="https://itbook.store/img/books/9781493773077.png"
                  alt="img"
                />
              </td>
              <td class="py-3 px-6">
                <a href="https://itbook.store/books/9781493773077">
                  https://itbook.store/books/9781493773077
                </a>
              </td>
            </tr>
            <tr class="cursor-pointer bg-cyan-500 duration-300 hover:scale-105 hover:bg-cyan-100">
              <td class="py-3 px-6">Learning Go</td>
              <td class="py-3 px-6">
                An Idiomatic Approach to Real-World Go Programming
              </td>
              <td class="py-3 px-6">9781492077213</td>
              <td class="py-3 px-6 text-left font-medium text-green-700">
                $35.88
              </td>
              <td>
                <img
                  src="https://itbook.store/img/books/9781492077213.png"
                  alt="img"
                />
              </td>
              <td class="py-3 px-6">
                <a href="https://itbook.store/books/9781492077213">
                  https://itbook.store/books/9781492077213
                </a>
              </td>
            </tr>
            <tr class="cursor-pointer bg-cyan-600 duration-300 hover:scale-105 hover:bg-cyan-100">
              <td class="py-3 px-6">Open Workbook of Cryptology</td>
              <td class="py-3 px-6">
                A project-based introduction to crypto in Python
              </td>
              <td class="py-3 px-6">1001656678502</td>
              <td class="py-3 px-6 text-left font-medium text-green-700">
                $12.00
              </td>
              <td>
                <img
                  src="https://itbook.store/img/books/1001656678502.png"
                  alt="img"
                />
              </td>
              <td class="py-3 px-6">
                <a href="https://itbook.store/books/1001656678502">
                  https://itbook.store/books/1001656678502
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    );
  };
  
  export default Body;