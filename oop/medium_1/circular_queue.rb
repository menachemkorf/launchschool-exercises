require 'pry'
class CircularQueue
  def initialize(queue_length)
    @queue = Array.new(queue_length)
    @next_element = 0
    @oldest_element = 0
  end

  def enqueue(value)
    unless @queue[@next_element].nil?
      @oldest_element = increment(@next_element)
    end

    @queue[@next_element] = value
    @next_element = increment(@next_element)
  end

  def dequeue
    value = @queue[@oldest_element]

    @queue[@oldest_element] = nil
    @oldest_element = increment(@oldest_element) unless value.nil?
    value
  end

  private

  def increment(element)
    if element == (@queue.size - 1)
      0
    else
      element + 1
    end
  end
end


queue = CircularQueue.new(3)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1
# [nil, 2, nil]
queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2
# [4, nil, 3]

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)

# [7, 5, 6]

puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
puts queue.dequeue == nil

queue = CircularQueue.new(4)
puts queue.dequeue == nil

queue.enqueue(1)
queue.enqueue(2)
puts queue.dequeue == 1

queue.enqueue(3)
queue.enqueue(4)
puts queue.dequeue == 2

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
puts queue.dequeue == 4
puts queue.dequeue == 5
puts queue.dequeue == 6
puts queue.dequeue == 7
# puts queue.dequeue == nil
