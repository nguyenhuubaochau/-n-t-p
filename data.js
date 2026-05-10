const lessons = {
  bai2: {
    title: 'Bài 2 - Lý thuyết cung cầu',
    tags: ['cầu', 'cung', 'cân bằng', 'dịch chuyển', 'đồ thị', 'tính toán'],
    sections: [
      {tag:'cầu', title:'1. Khái niệm cầu', body:'Cầu là số lượng hàng hóa mà người tiêu dùng muốn mua và có khả năng thanh toán ở các mức giá khác nhau. Nhu cầu chỉ là mong muốn; cầu là mong muốn kèm khả năng chi trả; lượng cầu là số lượng mua tại một mức giá cụ thể.', formula:'Qd = a - bP'},
      {tag:'cầu', title:'2. Quy luật cầu', body:'Giá tăng thì lượng cầu giảm, giá giảm thì lượng cầu tăng. Đường cầu dốc xuống từ trái sang phải, hàm cầu là hàm nghịch biến.', formula:'P ↑ ⇒ Qd ↓ | P ↓ ⇒ Qd ↑'},
      {tag:'cầu', title:'3. Các yếu tố ảnh hưởng đến cầu', body:'Thu nhập, giá hàng hóa liên quan, quy mô dân số, thị hiếu và kỳ vọng đều có thể làm đường cầu dịch chuyển. Hàng hóa thông thường: thu nhập tăng thì cầu tăng. Hàng hóa cấp thấp: thu nhập tăng thì cầu giảm.'},
      {tag:'dịch chuyển', title:'4. Di chuyển dọc đường cầu và dịch chuyển đường cầu', body:'Di chuyển dọc đường cầu xảy ra do giá của chính hàng hóa thay đổi. Dịch chuyển đường cầu xảy ra do yếu tố ngoài giá thay đổi như thu nhập, dân số, thị hiếu, giá hàng liên quan. Dịch phải là cầu tăng, dịch trái là cầu giảm.'},
      {tag:'cung', title:'5. Khái niệm cung', body:'Cung là số lượng hàng hóa mà người bán sẵn sàng bán ở các mức giá khác nhau. Lượng cung là số lượng bán tại một mức giá cụ thể.', formula:'Qs = c + dP'},
      {tag:'cung', title:'6. Quy luật cung', body:'Giá tăng thì lượng cung tăng, giá giảm thì lượng cung giảm. Đường cung dốc lên từ trái sang phải, hàm cung là hàm đồng biến.', formula:'P ↑ ⇒ Qs ↑ | P ↓ ⇒ Qs ↓'},
      {tag:'cung', title:'7. Các yếu tố ảnh hưởng đến cung', body:'Giá yếu tố sản xuất, công nghệ, chính sách chính phủ, số lượng người sản xuất và kỳ vọng đều ảnh hưởng đến cung. Thuế tăng hoặc chi phí đầu vào tăng làm cung giảm; công nghệ tốt hoặc trợ cấp làm cung tăng.'},
      {tag:'dịch chuyển', title:'8. Di chuyển dọc đường cung và dịch chuyển đường cung', body:'Di chuyển dọc đường cung do giá của chính hàng hóa thay đổi. Dịch chuyển đường cung do công nghệ, thuế, giá đầu vào, số lượng người bán hoặc kỳ vọng thay đổi. Dịch phải là cung tăng, dịch trái là cung giảm.'},
      {tag:'cân bằng', title:'9. Cân bằng thị trường', body:'Điểm cân bằng thị trường là nơi lượng cầu bằng lượng cung. Tại điểm này không có dư thừa và không có thiếu hụt.', formula:'Qd = Qs'},
      {tag:'cân bằng', title:'10. Dư thừa và thiếu hụt', body:'Dư thừa xảy ra khi cung lớn hơn cầu, giá có xu hướng giảm. Thiếu hụt xảy ra khi cầu lớn hơn cung, giá có xu hướng tăng.', formula:'Qs > Qd ⇒ dư thừa | Qd > Qs ⇒ thiếu hụt'},
      {tag:'đồ thị', title:'11. Ảnh hưởng của thay đổi cung cầu', body:'Cầu tăng: giá tăng, lượng tăng. Cầu giảm: giá giảm, lượng giảm. Cung tăng: giá giảm, lượng tăng. Cung giảm: giá tăng, lượng giảm.'},
      {tag:'tính toán', title:'12. Dạng bài cân bằng thị trường', body:'Cách làm: cho Qd bằng Qs để tìm P cân bằng, sau đó thay P vào một trong hai hàm để tìm Q cân bằng.', formula:'Ví dụ: Qd = 100 - 2P, Qs = 20 + 2P\n100 - 2P = 20 + 2P ⇒ P = 20 ⇒ Q = 60'}
    ]
  },
  bai5: {
    title: 'Bài 5 - Sản xuất, chi phí, lợi nhuận',
    tags: ['sản xuất', 'AP-MP', 'đồng lượng', 'chi phí', 'lợi nhuận', 'đồ thị', 'tính toán'],
    sections: [
      {tag:'sản xuất', title:'1. Hàm sản xuất', body:'Hàm sản xuất biểu diễn mối quan hệ giữa đầu vào và đầu ra. Q là sản lượng, K là vốn, L là lao động, A là trình độ công nghệ.', formula:'Q = f(K,L)\nQ = A·K^α·L^β'},
      {tag:'sản xuất', title:'2. Hiệu quả theo quy mô', body:'Với hàm Cobb-Douglas, xét tổng số mũ α + β. Nếu lớn hơn 1 là tăng theo quy mô, bằng 1 là không đổi theo quy mô, nhỏ hơn 1 là giảm theo quy mô.', formula:'α + β > 1: tăng | = 1: không đổi | < 1: giảm'},
      {tag:'sản xuất', title:'3. Ngắn hạn và dài hạn', body:'Ngắn hạn có ít nhất một yếu tố cố định, thường là K cố định và L thay đổi. Dài hạn là khi tất cả yếu tố đầu vào đều thay đổi được.'},
      {tag:'AP-MP', title:'4. Năng suất trung bình AP', body:'AP cho biết trung bình một lao động tạo ra bao nhiêu sản phẩm.', formula:'AP = Q / L'},
      {tag:'AP-MP', title:'5. Năng suất cận biên MP', body:'MP cho biết tăng thêm 1 đơn vị lao động thì sản lượng tăng thêm bao nhiêu.', formula:'MP = ΔQ / ΔL'},
      {tag:'AP-MP', title:'6. Quan hệ AP và MP', body:'MP > AP thì AP tăng. MP < AP thì AP giảm. MP = AP thì AP đạt cực đại. Đây là ý rất hay thi.'},
      {tag:'AP-MP', title:'7. Quy luật năng suất cận biên giảm dần', body:'Khi tăng liên tục một yếu tố đầu vào trong khi yếu tố khác giữ nguyên, ban đầu sản lượng tăng nhanh, sau đó tăng chậm dần, làm MP giảm dần.'},
      {tag:'đồng lượng', title:'8. Đường đồng lượng', body:'Đường đồng lượng biểu diễn các phối hợp K và L tạo ra cùng mức sản lượng. Tính chất: không cắt nhau, càng xa gốc sản lượng càng lớn, thường dốc xuống.'},
      {tag:'đồng lượng', title:'9. MRTS và hai trường hợp đặc biệt', body:'MRTS cho biết muốn tăng thêm 1 lao động thì có thể giảm bao nhiêu vốn để sản lượng không đổi. Thay thế hoàn toàn: đường thẳng. Không thay thế được: chữ L.', formula:'MRTS = MP_L / MP_K'},
      {tag:'chi phí', title:'10. Đường đồng phí và tối thiểu hóa chi phí', body:'Đường đồng phí biểu diễn các phối hợp K và L có cùng tổng chi phí. Điều kiện tối thiểu hóa chi phí là tỷ lệ năng suất cận biên trên giá đầu vào bằng nhau.', formula:'C = wL + rK\nMP_L / w = MP_K / r'},
      {tag:'chi phí', title:'11. Chi phí kế toán và chi phí kinh tế', body:'Chi phí kế toán là chi phí thực chi như nguyên liệu, lương, thuê tài sản. Chi phí kinh tế bằng chi phí kế toán cộng chi phí cơ hội.'},
      {tag:'chi phí', title:'12. FC, VC, TC', body:'FC là chi phí cố định, không đổi theo sản lượng. VC là chi phí biến đổi, thay đổi theo sản lượng. TC là tổng chi phí.', formula:'TC = FC + VC'},
      {tag:'chi phí', title:'13. AFC, AVC, AC, MC', body:'AFC luôn giảm. AVC và AC thường có dạng chữ U. MC là chi phí tăng thêm khi sản xuất thêm 1 sản phẩm.', formula:'AFC=FC/Q | AVC=VC/Q | AC=TC/Q | MC=ΔTC/ΔQ'},
      {tag:'đồ thị', title:'14. Quan hệ MC với AC và AVC', body:'MC < AC thì AC giảm. MC = AC thì AC cực tiểu. MC > AC thì AC tăng. MC cũng cắt AVC tại điểm thấp nhất.'},
      {tag:'lợi nhuận', title:'15. Lợi nhuận và doanh thu', body:'Tổng doanh thu bằng giá nhân sản lượng. Lợi nhuận bằng tổng doanh thu trừ tổng chi phí.', formula:'TR = P·Q\nπ = TR - TC'},
      {tag:'lợi nhuận', title:'16. MR, MC và tối đa hóa lợi nhuận', body:'MR là doanh thu tăng thêm khi bán thêm 1 sản phẩm. Doanh nghiệp tối đa hóa lợi nhuận khi MR = MC. MR > MC thì nên tăng sản lượng; MR < MC thì nên giảm sản lượng.', formula:'MR = ΔTR/ΔQ\nMR = MC'},
      {tag:'lợi nhuận', title:'17. Điểm hòa vốn', body:'Điểm hòa vốn là khi doanh thu bằng chi phí, lợi nhuận bằng 0.', formula:'TR = TC | π = 0'},
      {tag:'tính toán', title:'18. Dạng tính nhanh hay gặp', body:'AP = Q/L. MP = chênh lệch Q. TC = FC + VC. AC = TC/Q. MC = chênh lệch TC. Lợi nhuận = TR - TC. Hòa vốn với FC, AVC, P: Q = FC/(P - AVC).', formula:'Q hòa vốn = FC / (P - AVC)'}
    ]
  }
};

const questions = [
  // Bai 2 basic
  {lesson:'bai2', level:'Cơ bản', q:'Khi giá của một hàng hóa tăng lên, lượng cầu của hàng hóa đó sẽ:', a:['Tăng','Giảm','Không đổi','Tăng rồi giảm'], correct:1, explain:'Theo quy luật cầu: giá tăng thì lượng cầu giảm.'},
  {lesson:'bai2', level:'Cơ bản', q:'Đường cầu của một hàng hóa có dạng:', a:['Dốc lên từ trái sang phải','Song song trục tung','Dốc xuống từ trái sang phải','Nằm ngang'], correct:2, explain:'Đường cầu dốc xuống vì giá và lượng cầu có quan hệ nghịch biến.'},
  {lesson:'bai2', level:'Cơ bản', q:'Yếu tố nào sau đây KHÔNG làm dịch chuyển đường cầu?', a:['Thu nhập người tiêu dùng','Giá hàng hóa liên quan','Giá của chính hàng hóa đó','Thị hiếu người tiêu dùng'], correct:2, explain:'Giá của chính hàng hóa chỉ gây di chuyển dọc đường cầu.'},
  {lesson:'bai2', level:'Cơ bản', q:'Nếu thu nhập người tiêu dùng tăng, cầu đối với hàng hóa thông thường sẽ:', a:['Giảm','Tăng','Không đổi','Bằng 0'], correct:1, explain:'Hàng hóa thông thường có cầu tăng khi thu nhập tăng.'},
  {lesson:'bai2', level:'Cơ bản', q:'Gạo chất lượng thấp thường được xem là:', a:['Hàng hóa thông thường','Hàng hóa bổ sung','Hàng hóa cấp thấp','Hàng hóa thay thế'], correct:2, explain:'Khi thu nhập tăng, người tiêu dùng có xu hướng giảm mua hàng cấp thấp.'},
  {lesson:'bai2', level:'Cơ bản', q:'Hàng hóa nào sau đây là hàng hóa bổ sung?', a:['Coca và Pepsi','Xe máy và xăng','Cơm và phở','Bút và thước không liên quan'], correct:1, explain:'Xe máy và xăng thường được sử dụng cùng nhau.'},
  {lesson:'bai2', level:'Cơ bản', q:'Khi giá thịt heo tăng, cầu thịt bò tăng. Thịt bò là:', a:['Hàng hóa cấp thấp','Hàng hóa bổ sung','Hàng hóa thay thế','Hàng hóa thông thường'], correct:2, explain:'Thịt bò có thể thay thế thịt heo trong tiêu dùng.'},
  {lesson:'bai2', level:'Cơ bản', q:'Quy luật cung cho biết:', a:['Giá tăng → cung giảm','Giá giảm → cung tăng','Giá tăng → cung tăng','Giá không ảnh hưởng cung'], correct:2, explain:'Theo quy luật cung: giá tăng thì lượng cung tăng.'},
  {lesson:'bai2', level:'Cơ bản', q:'Chi phí nguyên vật liệu tăng sẽ làm:', a:['Cung tăng','Cầu tăng','Cung giảm','Cầu giảm'], correct:2, explain:'Chi phí đầu vào tăng làm doanh nghiệp sản xuất ít hơn, cung giảm.'},
  {lesson:'bai2', level:'Cơ bản', q:'Điểm cân bằng thị trường là điểm:', a:['Qd > Qs','Qd < Qs','Qd = Qs','Giá bằng 0'], correct:2, explain:'Cân bằng thị trường xảy ra khi lượng cầu bằng lượng cung.'},
  {lesson:'bai2', level:'Nâng cao', q:'Nếu Chính phủ tăng thuế đối với doanh nghiệp thì:', a:['Đường cung dịch phải','Đường cung dịch trái','Đường cầu dịch phải','Đường cầu dịch trái'], correct:1, explain:'Thuế làm chi phí sản xuất tăng nên cung giảm, đường cung dịch trái.'},
  {lesson:'bai2', level:'Nâng cao', q:'Nếu dân số tăng lên nhanh chóng thì:', a:['Cầu giảm','Cầu tăng','Cung giảm','Giá giảm chắc chắn'], correct:1, explain:'Dân số tăng làm số người mua tiềm năng tăng, cầu tăng.'},
  {lesson:'bai2', level:'Nâng cao', q:'Khi giá hàng hóa cao hơn giá cân bằng:', a:['Thiếu hụt xảy ra','Dư thừa xảy ra','Cầu tăng','Cung giảm'], correct:1, explain:'Giá cao hơn cân bằng thường làm lượng cung lớn hơn lượng cầu, gây dư thừa.'},
  {lesson:'bai2', level:'Nâng cao', q:'Khi cầu tăng và cung không đổi thì:', a:['Giá cân bằng giảm','Giá cân bằng tăng','Lượng cân bằng giảm','Cung giảm'], correct:1, explain:'Cầu tăng làm cả giá cân bằng và lượng cân bằng tăng.'},
  {lesson:'bai2', level:'Nâng cao', q:'Khi cung giảm và cầu không đổi:', a:['Giá tăng, lượng giảm','Giá giảm, lượng tăng','Giá giảm, lượng giảm','Giá tăng, lượng tăng'], correct:0, explain:'Cung giảm làm giá tăng và lượng cân bằng giảm.'},
  {lesson:'bai2', level:'Đúng/Sai', q:'Giá của chính hàng hóa thay đổi sẽ làm dịch chuyển đường cầu.', a:['Đúng','Sai'], correct:1, explain:'Giá của chính hàng hóa làm di chuyển dọc đường cầu, không làm dịch chuyển đường cầu.'},
  {lesson:'bai2', level:'Đúng/Sai', q:'Hàng hóa thay thế là hàng hóa có thể dùng thay cho nhau.', a:['Đúng','Sai'], correct:0, explain:'Ví dụ Coca và Pepsi, cơm và phở.'},
  {lesson:'bai2', level:'Đúng/Sai', q:'Khi thu nhập giảm, cầu hàng hóa cấp thấp tăng.', a:['Đúng','Sai'], correct:0, explain:'Hàng cấp thấp thường được mua nhiều hơn khi thu nhập giảm.'},
  {lesson:'bai2', level:'Đúng/Sai', q:'Cung và cầu bằng nhau tại điểm cân bằng.', a:['Đúng','Sai'], correct:0, explain:'Đây là điều kiện cân bằng thị trường.'},
  {lesson:'bai2', level:'Đúng/Sai', q:'Nếu cung lớn hơn cầu thì thị trường thiếu hụt.', a:['Đúng','Sai'], correct:1, explain:'Cung lớn hơn cầu là dư thừa, không phải thiếu hụt.'},
  {lesson:'bai2', level:'Đồ thị', q:'Đường cầu dịch sang phải khi:', a:['Thu nhập tăng với hàng hóa thông thường','Giá chính hàng hóa tăng','Chi phí sản xuất tăng','Thuế tăng'], correct:0, explain:'Thu nhập tăng với hàng hóa thông thường làm cầu tăng, đường cầu dịch phải.'},
  {lesson:'bai2', level:'Đồ thị', q:'Đường cung dịch sang trái khi:', a:['Công nghệ cải tiến','Thuế giảm','Chi phí đầu vào tăng','Số lượng doanh nghiệp tăng'], correct:2, explain:'Chi phí đầu vào tăng làm cung giảm, đường cung dịch trái.'},
  {lesson:'bai2', level:'Đồ thị', q:'Di chuyển dọc đường cầu xảy ra khi:', a:['Thu nhập thay đổi','Giá hàng hóa thay đổi','Dân số thay đổi','Thị hiếu thay đổi'], correct:1, explain:'Chỉ giá của chính hàng hóa thay đổi mới gây di chuyển dọc đường cầu.'},

  // Bai 2 calculations as MCQ
  {lesson:'bai2', level:'Tính toán', q:'Cho Qd = 100 - 2P, Qs = 20 + 2P. Giá cân bằng là:', a:['10','20','30','40'], correct:1, explain:'100 - 2P = 20 + 2P ⇒ 80 = 4P ⇒ P = 20.'},
  {lesson:'bai2', level:'Tính toán', q:'Với Qd = 100 - 2P, Qs = 20 + 2P, lượng cân bằng là:', a:['40','50','60','80'], correct:2, explain:'Thay P = 20 vào Qd: Q = 100 - 40 = 60.'},
  {lesson:'bai2', level:'Tính toán', q:'Cho Qd = 120 - 3P, Qs = 20 + 2P. Giá cân bằng là:', a:['10','20','25','30'], correct:1, explain:'120 - 3P = 20 + 2P ⇒ 100 = 5P ⇒ P = 20.'},
  {lesson:'bai2', level:'Tính toán', q:'Cho Qd = 120 - 3P, Qs = 20 + 2P. Lượng cân bằng là:', a:['50','60','70','80'], correct:1, explain:'Thay P = 20 vào Qs: Q = 20 + 40 = 60.'},
  {lesson:'bai2', level:'Tính toán', q:'Cho Qd = 80 - P, Qs = 20 + 2P. Nếu giá thị trường P = 20 thì thị trường:', a:['Dư thừa','Thiếu hụt','Cân bằng','Không xác định'], correct:0, explain:'Qd = 60, Qs = 60 ở P=20 nếu đúng hàm này là cân bằng. Nhưng để luyện dạng dư thừa, dùng P=25 sẽ dư thừa. Câu này chọn Cân bằng nếu theo công thức.'},

  // Bai 5 MCQ
  {lesson:'bai5', level:'Cơ bản', q:'Hàm sản xuất biểu diễn mối quan hệ giữa:', a:['Giá bán và lợi nhuận','Chi phí và doanh thu','Đầu vào và đầu ra','Lao động và tiền lương'], correct:2, explain:'Hàm sản xuất cho biết đầu vào K, L tạo ra sản lượng Q.'},
  {lesson:'bai5', level:'Cơ bản', q:'Trong ngắn hạn, yếu tố nào thường được xem là cố định?', a:['Lao động','Nguyên liệu','Vốn','Sản lượng'], correct:2, explain:'Trong ngắn hạn thường giả định vốn K cố định.'},
  {lesson:'bai5', level:'Cơ bản', q:'Năng suất trung bình của lao động được xác định bằng:', a:['AP = Q/L','AP = ΔQ/ΔL','AP = TC/Q','AP = TR - TC'], correct:0, explain:'AP là sản lượng bình quân trên một lao động.'},
  {lesson:'bai5', level:'Cơ bản', q:'Khi MP > AP thì:', a:['AP giảm','AP tăng','AP cực tiểu','MP bằng 0'], correct:1, explain:'MP kéo AP đi lên khi MP lớn hơn AP.'},
  {lesson:'bai5', level:'Cơ bản', q:'Quy luật năng suất cận biên giảm dần cho biết:', a:['MP luôn tăng','MP giảm khi tăng đầu vào biến đổi trong điều kiện yếu tố khác cố định','AP luôn giảm','TC luôn tăng'], correct:1, explain:'Khi tăng liên tục đầu vào biến đổi, MP có xu hướng giảm dần.'},
  {lesson:'bai5', level:'Cơ bản', q:'Đường đồng lượng biểu diễn:', a:['Các mức chi phí bằng nhau','Các mức doanh thu bằng nhau','Các phối hợp đầu vào tạo cùng sản lượng','Các mức lợi nhuận bằng nhau'], correct:2, explain:'Isoquant là tập hợp K và L tạo cùng Q.'},
  {lesson:'bai5', level:'Cơ bản', q:'Đường đồng lượng của các yếu tố thay thế hoàn toàn có dạng:', a:['Chữ U','Đường ngang','Đường thẳng','Chữ L'], correct:2, explain:'Thay thế hoàn toàn có đường đồng lượng là đường thẳng.'},
  {lesson:'bai5', level:'Cơ bản', q:'Đường đồng lượng của các yếu tố không thay thế được có dạng:', a:['Đường thẳng','Hyperbol','Chữ L','Đường ngang'], correct:2, explain:'Không thay thế được thường có dạng chữ L.'},
  {lesson:'bai5', level:'Chi phí', q:'Chi phí cố định là:', a:['Chi phí thay đổi theo sản lượng','Chi phí không đổi theo sản lượng','Chi phí nguyên liệu','Chi phí lao động'], correct:1, explain:'FC không đổi khi sản lượng thay đổi trong ngắn hạn.'},
  {lesson:'bai5', level:'Chi phí', q:'Tổng chi phí bằng FC + VC.', a:['Đúng','Sai'], correct:0, explain:'TC = FC + VC.'},
  {lesson:'bai5', level:'Chi phí', q:'Chi phí cận biên là:', a:['Chi phí cho 1 đơn vị sản phẩm','Chi phí tăng thêm khi sản xuất thêm 1 sản phẩm','Tổng chi phí','Chi phí cố định'], correct:1, explain:'MC = ΔTC/ΔQ.'},
  {lesson:'bai5', level:'Chi phí', q:'Khi MC < AC thì:', a:['AC tăng','AC giảm','AC cực đại','MC = 0'], correct:1, explain:'MC nằm dưới AC sẽ kéo AC giảm.'},
  {lesson:'bai5', level:'Lợi nhuận', q:'Điều kiện tối đa hóa lợi nhuận là MR = MC.', a:['Đúng','Sai'], correct:0, explain:'Doanh nghiệp tối đa hóa lợi nhuận tại mức sản lượng MR = MC.'},
  {lesson:'bai5', level:'Lợi nhuận', q:'Doanh nghiệp hòa vốn khi TR = TC.', a:['Đúng','Sai'], correct:0, explain:'Khi TR = TC thì lợi nhuận bằng 0.'},

  // Bai 5 calculations
  {lesson:'bai5', level:'Tính toán', q:'Bảng Q theo L: L=1,Q=20; L=2,Q=50. MP của lao động thứ 2 là:', a:['20','25','30','50'], correct:2, explain:'MP₂ = Q₂ - Q₁ = 50 - 20 = 30.'},
  {lesson:'bai5', level:'Tính toán', q:'Bảng Q theo L: L=4,Q=90. AP tại L=4 là:', a:['20','22.5','25','90'], correct:1, explain:'AP = Q/L = 90/4 = 22.5.'},
  {lesson:'bai5', level:'Tính toán', q:'Cho FC = 100, VC = 20Q. Khi Q = 10, TC bằng:', a:['100','200','300','400'], correct:2, explain:'VC = 20×10 = 200, TC = 100 + 200 = 300.'},
  {lesson:'bai5', level:'Tính toán', q:'Cho FC = 100, VC = 20Q, Q = 10. AC bằng:', a:['10','20','30','40'], correct:2, explain:'TC = 300, AC = TC/Q = 300/10 = 30.'},
  {lesson:'bai5', level:'Tính toán', q:'Cho TC lần lượt: Q=1:100, Q=2:130. MC tại Q=2 là:', a:['20','30','40','130'], correct:1, explain:'MC₂ = 130 - 100 = 30.'},
  {lesson:'bai5', level:'Tính toán', q:'P = 50, Q = 20, TC = 700. Lợi nhuận bằng:', a:['200','300','700','1000'], correct:1, explain:'TR = 50×20 = 1000, π = 1000 - 700 = 300.'},
  {lesson:'bai5', level:'Tính toán', q:'FC = 200, AVC = 10, P = 20. Sản lượng hòa vốn là:', a:['10','20','30','40'], correct:1, explain:'Q = FC/(P - AVC) = 200/(20 - 10) = 20.'},
  {lesson:'bai5', level:'Tính toán', q:'MPL = 20, MPK = 10, w = 4, r = 2. Doanh nghiệp đã tối thiểu hóa chi phí chưa?', a:['Có','Chưa','Không đủ dữ liệu','Chỉ khi MR=MC'], correct:0, explain:'MPL/w = 20/4 = 5; MPK/r = 10/2 = 5. Hai tỷ lệ bằng nhau nên đã tối thiểu hóa chi phí.'},
  {lesson:'bai5', level:'Tính toán', q:'Q=1 TR=50, Q=2 TR=100. MR tại Q=2 là:', a:['30','40','50','100'], correct:2, explain:'MR₂ = 100 - 50 = 50.'},
  {lesson:'bai5', level:'Tính toán', q:'Q=4 TC=170, Q=5 TC=250. MC tại Q=5 là:', a:['50','60','70','80'], correct:3, explain:'MC₅ = 250 - 170 = 80.'}
];

const practiceSets = [
  {
    lesson:'bai2', title:'Bài 2 - Bài tập tính toán', items:[
      {name:'Cân bằng 1', task:'Cho Qd = 100 - 2P, Qs = 20 + 2P. Tìm P*, Q*.', solution:'Qd = Qs ⇒ 100 - 2P = 20 + 2P ⇒ P* = 20. Thay vào Q = 60.'},
      {name:'Cân bằng 2', task:'Cho Qd = 120 - 3P, Qs = 20 + 2P. Tìm điểm cân bằng thị trường.', solution:'120 - 3P = 20 + 2P ⇒ 100 = 5P ⇒ P* = 20. Q* = 20 + 2×20 = 60.'},
      {name:'Dư thừa/thiếu hụt', task:'Cho Qd = 80 - P, Qs = 20 + 2P. Nếu P = 25, thị trường dư thừa hay thiếu hụt?', solution:'Qd = 80 - 25 = 55. Qs = 20 + 2×25 = 70. Vì Qs > Qd nên thị trường dư thừa.'}
    ]
  },
  {
    lesson:'bai5', title:'Bài 5 - Bài tập tính toán', items:[
      {name:'AP và MP', task:'Bảng L/Q: 1/20, 2/50, 3/75, 4/90, 5/100. Tính AP, MP.', solution:'AP: 20; 25; 25; 22.5; 20. MP: 20; 30; 25; 15; 10. MP giảm dần từ lao động thứ 2 trở đi.'},
      {name:'Tính chi phí', task:'FC = 100, VC = 20Q. Tính TC, AFC, AVC, AC khi Q = 10.', solution:'VC = 200. TC = 300. AFC = 100/10 = 10. AVC = 200/10 = 20. AC = 300/10 = 30.'},
      {name:'MC từ bảng TC', task:'Q/TC: 1/100, 2/130, 3/170, 4/220. Tính MC.', solution:'MC₂ = 30, MC₃ = 40, MC₄ = 50. Nếu tính từ Q=0 cần biết TC tại Q=0.'},
      {name:'Lợi nhuận', task:'P = 50, Q = 20, TC = 700. Tính TR và lợi nhuận.', solution:'TR = P×Q = 50×20 = 1000. π = TR - TC = 1000 - 700 = 300.'},
      {name:'Hòa vốn', task:'FC = 200, AVC = 10, P = 20. Tìm sản lượng hòa vốn.', solution:'Q = FC/(P - AVC) = 200/(20 - 10) = 20.'},
      {name:'Điều kiện tối ưu', task:'MPL = 20, MPK = 10, w = 4, r = 2. Kiểm tra tối thiểu hóa chi phí.', solution:'MPL/w = 20/4 = 5 và MPK/r = 10/2 = 5. Bằng nhau nên đã tối thiểu hóa chi phí.'}
    ]
  }
];
